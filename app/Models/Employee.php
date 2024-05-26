<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
/**
 * The Employee model.
 *
 * This model represents an employee in the system.
 */
class Employee extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'fullname',
        'department_id',
        'status'
    ];

    /**
     * Get the user detail.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the salaries of the employee.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function salaries()
    {
        return $this->hasMany(Salary::class);
    }
    
    /**
     * Get the departement detail from datamaster.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function department()
    {
        return $this->belongsTo(DataMaster::class, 'department_id');
    }
    /**
 * Accessor for the status attribute.
 *
 * @param int $value The value of the status attribute
 * @return string The formatted status
 */
public function getStatusAttribute($value)
{
    return $value ? 'Active' : 'Inactive';
}

    /**
     * Accessor for the fullname attribute.
     *
     * @param string $value The value of the fullname attribute
     * @return string The formatted fullname
     */
    public function getFullnameAttribute($value)
    {
        return ucwords($value);
    }

    /**
     * Scope a query to only include employees of a particular department.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query The query builder
     * @param int $departmentId The id of the department
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByDepartment($query, $departmentId)
    {
        return $query->where('department_id', $departmentId);
    }

    /**
     * Fire the employee by setting their status to 0.
     */
    public function fireEmployee()
    {
        $this->status = 0;
        $this->save();
    }
}
