<?php
namespace App\Jobs;

use App\Models\Employee;
use App\Models\Payslip;
use App\Models\Activity;
use App\Models\Salary;
use App\Models\PayslipItem;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Cache;
class GenerateWeeklyPayslips implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $employees;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($employees)
    {
        $this->employees = $employees;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $totalEmployees = count($this->employees);
        $processed = 0;

        foreach ($this->employees as $employee) {
            $this->createPayslip($employee);
            $processed++;

            // Add delay to simulate longer processing time
            sleep(1);

            // Calculate progress
            $progress = ($processed / $totalEmployees) * 100;

            // Log progress

            // Update progress in cache
            Cache::put('payslip_generation_progress', $progress);
        }

        // Mark completion
        Cache::put('payslip_generation_progress', 100);
    }

    protected function createPayslip($employee)
    {
        $payslip = Payslip::create([
            'employee_id' => $employee->id,
            'status' => 0,
            'payslip_date' => now()->startOfWeek()->format('Y-m-d') . ' / ' . now()->format('Y-m-d'),
        ]);

        $total = 0;
        foreach ($employee->activities as $activity) {
            $salary = Salary::where('employee_id', $employee->id)
                ->where('task_type_id', $activity->task_type_id)
                ->where('product_id', $activity->product_id)
                ->pluck('amount')
                ->first();

            if (!PayslipItem::where('activity_id', $activity->id)->exists()) {
                $payslipItem = PayslipItem::create([
                    'payslip_id' => $payslip->id,
                    'activity_id' => $activity->id,
                    'salary' => (int) $salary,
                    'quantity' => (int) $activity->qty,
                    'total' => (int) $salary * (int) $activity->qty,
                ]);
                $total += $payslipItem->total;
            }
        }

        $payslip->total = $total;
        $payslip->save();

        return $payslip;
    }
}

