<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PayslipItem extends Model
{
    use HasFactory;
    protected $fillable = ['payslip_id', 'activity_id',  'salary', 'quantity', 'total'];

    public function payslip()
    {
        return $this->belongsTo(Payslip::class);
    }

    public function activity()
    {
        return $this->belongsTo(Activity::class);
    }
}
