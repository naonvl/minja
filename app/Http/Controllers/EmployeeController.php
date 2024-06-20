<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\User;
use App\Models\Salary;
use App\Models\Activity;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Contracts\EmployeeRepositoryInterface;
class EmployeeController extends Controller
{
    protected $employeeRepository;
    public function __construct(EmployeeRepositoryInterface $employeeRepository)
    {
        $this->employeeRepository = $employeeRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $draw = $request->input('draw');
        $start = $request->input('start');
        $length = $request->input('length');

        $employees = Employee::where('status', 1)
            ->with('department')
            ->offset($start)
            ->limit($length)
            ->get();

        $recordsTotal = Employee::where('status', 1)->count();

        $data = [];
        foreach ($employees as $employee) {
            $data[] = [
                'id' => $employee->id,
                'fullname' => $employee->fullname,
                'status' => $employee->status,
                'department' => $employee->department->name,
            ];
        }

        return response()->json([
            'draw' => $draw,
            'recordsTotal' => $recordsTotal,
            'recordsFiltered' => $recordsTotal,
            'data' => $data,
        ], 200);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'fullname' => 'required|string',
            'email' => 'required|email|unique:users',
            'username' => 'required|string|unique:users', 
            'department' => 'required|integer',  
        ]);

        try {
            DB::beginTransaction();
            $data = $request->all();
            $user = new User();
            $user->user_type = 1;
            $user->username = $data['username'];
            $user->email = $data['email'];
            $user->password = bcrypt($data['password']);
            $user->role_id = 1;
            $user->save();

            $employee = new Employee();
            $employee->user_id = $user->id;
            $employee->fullname = $data['fullname'];
            $employee->status = 1;
            $employee->department_id = $data['department'];
            $employee->save();

            DB::commit();

            return response()->json(['data'=>$employee, 'message'=>'Employee created successfully'], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error'=>'Failed to create employee', 'message'=>$e->getMessage()], 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $employee = $this->employeeRepository->getById($id);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Employee not found'], 404);
        }
    
        $salaries = $this->formatSalaries($employee->salaries);
        $currentActivities = $this->filterThisWeekActivities($employee->activities);
        $qtyTotal = array_reduce($currentActivities, function($carry, $item) {
            return $carry + $item['qty'];
        }, 0);
        $isSalarySet = Salary::where("employee_id", $employee->id)->select('id')->first();
        $estSalary = $isSalarySet ? $this->calculateEstimatedSalary($employee, $currentActivities) : 0;
        $benefits = $this->formatBenefits($employee->benefits);
    
        $employee->setRelation('salaries', $salaries);
        $employee->setRelation('benefits', $benefits);
        $employee->estSalary = $estSalary;
        $employee->totalActivities = $qtyTotal;
    
        return response()->json(['data' => $employee, 'message' => 'Employee found successfully'], 200);
    }
    
    protected function formatSalaries($salaries)
    {
        return $salaries->map(function ($salary) {
            return [
                'id' => $salary->id,
                'name' => $salary->taskType->name . ' ' . $salary->product->name,
                'amount' => 'Rp. ' . number_format($salary->amount, 0, ',', '.')
            ];
        });
    }
    
    protected function filterThisWeekActivities($activities)
    {
        $activities->filter(function ($activity) {
            return $activity->created_at->isBetween(Carbon::now()->startOfWeek(), Carbon::now());
        });
        return $activities->toArray();
    }
    
    protected function calculateEstimatedSalary($employee, $currentActivities)
    {
        $totalAmount = 0;
        foreach ($currentActivities as $activity) {
            $salary = Salary::where('employee_id', $activity->user_id)->where('task_type_id', $activity->task_type_id)->where('product_id',$activity->product_id)->get();
            dd($salary);
            $amount = $this->employeeRepository->getSalaryAmount($employee->id, $activity->task_type_id, $activity->product_id);
            $totalAmount += (int)$amount;
        }
        return $totalAmount;
    }
    
    protected function formatBenefits($benefits)
    {
        return $benefits->map(function ($benefit) {
            return [
                'id' => $benefit->id,
                'name' => $benefit->name,
                'amount' => 'Rp. ' . number_format($benefit->amount, 0, ',', '.')
            ];
        });
    }
    

    public function getEmployeeByUser(string $id)
    {
        $id = Employee::where('user_id', $id)->pluck('id')->first();
        $employee = $this->show($id)->original['data'];
        if (!$employee) {
            return response()->json(['error' => 'Employee not found'], 404);
        }
        return response()->json(['data' => $employee,'message' => 'Employee found successfully'], 200);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $employee = Employee::find($id);
        if (!$employee) {
            return response()->json(['error' => 'Employee not found'], 404);
        }

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:employees,email,' . $id,
            'department' => 'required|string',
        ]);

        try {
            DB::beginTransaction();
            $employee->name = $request->input('name');
            $employee->email = $request->input('email');
            $employee->department = $request->input('department');
            $employee->save();

            DB::commit();

            $data = new EmployeeData();
            $data->data->employee = $employee;
            return response()->json(['data'=>$data, 'message'=>'Employee updated successfully'], 200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error'=>'Failed to update employee', 'message'=>$e->getMessage()], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $employee = Employee::find($id);
        if (!$employee) {
            return response()->json(['error' => 'Employee not found'], 404);
        }
        try {
            $employee->delete();

            $data = new EmployeeData();
            $data->data->message = 'Employee deleted successfully';
            return response()->json(['data'=>$data], 200);
        } catch (\Exception $e) {
            return response()->json(['error'=>'Failed to delete employee', 'message'=>$e->getMessage()], 422);
        }
    }

    public function fireEmployee(Employee $employee)
    {
        $employee->fireEmployee();
        return response()->json(['message' => 'Employee fired successfully', 'status' => 200], 200);
    }
}
