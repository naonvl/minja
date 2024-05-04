<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;
    protected $fillable = [
      'user_id',
      'task_type_id',
      'product_type_id',
      'brand_id',
      'qty',
      'status',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function taskType()
    {
        return $this->belongsTo(TaskType::class);
    }

    public function productType()
    {
        return $this->belongsTo(ProductType::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
}
