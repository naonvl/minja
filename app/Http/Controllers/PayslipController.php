<?php

namespace App\Http\Controllers;

use App\Models\Payslip;
use App\Models\Employee;
use App\Models\Activity;
use App\Models\Salary;
use App\Models\PayslipItem;
use Illuminate\Http\Request;

class PayslipController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $query = Payslip::with([
                'employee',
                'payslipItems' => function ($query) {
                    $query->with([
                        'activity' => function ($query) {
                            $query->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])->with(['product', 'taskType']);
                        },
                    ]);
                },
            ]);
            $query->whereHas('payslipItems', function ($query) {
                $query->where('id', '>', 0);
            });
            if ($request->has('all')) {
                $payslips = $query->get();
                $count = $payslips->count();
            } else {
                if ($request->has('employee_id')) {
                    $query->where('employee_id', $request->input('employee_id'));
                }

                if ($request->has('status')) {
                    $query->where('status', $request->input('status'));
                }

                $perPage = 10; // adjust this value to change the number of items per page
                $page = $request->input('page', 1);

                $payslips = $query->paginate($perPage);

                $count = $payslips->total();
                $data = $payslips->items();
            }

            if (!$payslips) {
                return response()->json(['error' => 'No payslips found'], 404);
            }

            $payslips->map(function ($payslip) {
                $dateRange = explode(' / ', $payslip->payslip_date);
                $start_date = \Carbon\Carbon::parse($dateRange[0]);
                $end_date = \Carbon\Carbon::parse($dateRange[1]);
                $payslip->payslip_date = "$start_date / $end_date";
                $payslip->payslipItems->map(function ($item) {
                    $item->activityName = $item->activity->taskType->name . ' ' . $item->activity->product->name;
                    $item->setVisible(['activityName', 'salary', 'total', 'quantity']);
                    return $item;
                });
                return $payslip;
            });

            return response()->json(
                [
                    'data' => $data ?? $payslips,
                    'count' => $count,
                    'perPage' => $perPage ?? null,
                    'currentPage' => $page ?? null,
                ],
                200,
            );
        } catch (Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function getTotalPayslips($employee_id)
    {
        $payslips = Payslip::where('employee_id', $employee_id)->where('status', 1)->select('total')->get();

        $totalPayslips = $payslips->count();
        $totalAmount = $payslips->sum('total');

        return response()->json([
            'data' => [
                'total_payslips' => $totalPayslips,
                'total_amount' => $totalAmount,
            ],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'employee_id' => 'required',
            'salary' => 'required',
            'deductions' => 'required',
            'net_salary' => 'required',
        ]);

        $payslip = Payslip::create($request->all());
        return response()->json(['data' => $payslip, 'message' => 'Payslip created successfully'], 201);
    }

    public function generate()
    {
        $employees = Employee::where('status', 1)->get();
        $payslips = [];

        foreach ($employees as $employee) {
            $payslip = $this->createPayslip($employee->id);
            $payslips[] = $payslip;
        }

        return response()->json(['data' => $payslips, 'message' => 'Payslips generated successfully'], 201);
    }

    /**
     * generate payslip.
     */
    public function createPayslip($employeeId)
    {
        // Create payslip
        $payslip = Payslip::create([
            'employee_id' => $employeeId,
            'status' => 0,
            'payslip_date' => now()->startOfWeek()->format('Y-m-d') . ' / ' . now()->format('Y-m-d'),
        ]);

        // Get activities for the employee
        $activities = Activity::where('user_id', $employeeId)->where('created_at', '>=', now()->startOfWeek())->where('created_at', '<=', now())->where('status', 4)->get();

        if ($activities->count() > 0) {
            $total = 0;
            foreach ($activities as $activity) {
                // Get salary for the activity
                $salary = Salary::where('employee_id', $employeeId)
                    ->where('task_type_id', $activity->task_type_id)
                    ->where('product_id', $activity->product_id)
                    ->pluck('amount')
                    ->first();
                $activity->status = 5;
                $activity->save();
                // Create payslip item
                $payslipItem = PayslipItem::create([
                    'payslip_id' => $payslip->id,
                    'activity_id' => $activity->id,
                    'salary' => (int) $salary,
                    'quantity' => (int) $activity->qty,
                    'total' => (int) $salary * (int) $activity->qty,
                ]);
                $total += $payslipItem->total;
            }

            // Update payslip total
            $payslip->total = $total;
            $payslip->save();
        }

        // Return success response
        return $payslip;
    }
    /**
     * Display the specified resource.
     */
    public function show(Payslip $payslip)
    {
        return response()->json(['data' => $payslip, 'message' => 'Payslip retrieved successfully'], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Payslip $payslip)
    {
        $request->validate([
            'employee_id' => 'required',
            'salary' => 'required',
            'deductions' => 'required',
            'net_salary' => 'required',
        ]);

        $payslip->update($request->all());
        return response()->json(['data' => $payslip, 'message' => 'Payslip updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Payslip $payslip)
    {
        $payslip->delete();
        return response()->json(['message' => 'Payslip deleted successfully'], 200);
    }
    public function payAll()
    {
        $employees = Employee::where('status', 1)->get();
        $employeePayslips = [];

        foreach ($employees as $employee) {
            $payslips = Payslip::where('employee_id', $employee->id)
                ->where('status', 0)
                ->where('total', '!=', 0)
                ->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])
                ->get();
            foreach ($payslips as $key => $payslip) {
                $payslip->status = 1;
                $payslip->save();
            }

            if (count($payslips) > 0) {
                $employeePayslips[] = $payslips;
            }
        }

        return response()->json(['data' => $payslips, 'message' => 'Payslips Paid successfully'], 201);
    }
    public function unpaidAll()
    {
        $employees = Employee::where('status', 1)->get();
        $employeePayslips = [];

        foreach ($employees as $employee) {
            $payslips = Payslip::where('employee_id', $employee->id)
                ->where('status', 1)
                ->where('total', '!=', 0)
                ->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])
                ->get();
            foreach ($payslips as $key => $payslip) {
                $payslip->status = 0;
                $payslip->save();
            }

            if (count($payslips) > 0) {
                $employeePayslips[] = $payslips;
            }
        }

        return response()->json(['data' => $payslips, 'message' => 'Payslips Unpaid successfully'], 201);
    }
}
