<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Activity
 *
 * @package App\Models
 *
 * @property int $id
 * @property int $task_type_id
 * @property int $product_id
 * @property int $assigner_id
 * @property int $user_id
 * @property int $qty
 *
 * @method static create(array $attributes = [])
 */
class Activity extends Model
{
    use HasFactory;

    /**
     * Get the task type associated with the activity.
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
        return $this->belongsTo(DataMaster::class, 'product_id');
    }
    /**
     * Get the product associated with the activity.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function brand()
    {
        return $this->belongsTo(DataMaster::class, 'brand_id');
    }

    /**
     * Get the assigner associated with the activity.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function assigner()
    {
        return $this->belongsTo(User::class, 'assigner_id');
    }

    /**
     * Get the employee associated with the activity.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function employee()
    {
        return $this->belongsTo(Employee::class, 'user_id');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['task_type_id', 'product_id', 'assigner_id','brand_id', 'user_id', 'qty', 'status'];
    /**
     * Get the status of the activity as a human-readable string.
     *
     * @param int $value The status value (0-4)
     * @return string The human-readable status string
     */
    public function getStatusAttribute($value)
    {
        $statuses = [
            0 => 'Draft',
            1 => 'Assigned',
            2 => 'In Progress',
            3 => 'Partially Done',
            4 => 'Complete',
            5 => 'Paid',
        ];

        return $statuses[$value] ?? 'Unknown';
    }
}
