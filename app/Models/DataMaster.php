<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataMaster extends Model
{
    use HasFactory;

    protected $fillable = ['name','type_master_data'];
    
    public function masterType()
    {
        return $this->belongsTo(MasterType::class);
    }

    public function getTipeMasterDataAttribute($value)
    {
        return ucfirst($value);
    }
}
