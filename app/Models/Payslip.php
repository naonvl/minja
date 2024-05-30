<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payslip extends Model
{
    use HasFactory;
    protected $fillable = ['employee_id','payslip_date','status','total'];
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function payslipItems()
    {
        return $this->hasMany(PayslipItem::class);
    }
    public function getStatusAttribute($value)
    {
        $statuses = [
            0 => 'Pending',
            1 => 'Paid',
        ];

        return $statuses[$value] ?? 'Unknown';
    }
}
