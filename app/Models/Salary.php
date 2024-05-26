<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Salary extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'task_type_id',
        'product_id',
        'amount',
    ];

    /**
     * Get the employee that owns the salary.
     */
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    /**
     * Get the task type associated with the salary.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function taskType()
    {
        return $this->belongsTo(DataMaster::class, 'task_type_id');
    }

    /**
     * Get the product associated with the activity.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    /**
     * Scope a query to only include salaries for a specific employee, task type and product.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  int  $employeeId
     * @param  int  $taskTypeId
     * @param  int  $productId
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeForEmployeeTaskProduct($query, $employeeId, $taskTypeId, $productId)
    {
        return $query->where('employee_id', $employeeId)
            ->where('task_type_id', $taskTypeId)
            ->where('product_id', $productId);
    }
}
