<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataMaster extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'master_type_id'];
    
    public function masterType()
    {
        return $this->belongsTo(MasterType::class);
    }
}
