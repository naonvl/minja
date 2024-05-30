<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\DataMaster;
class BrandsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $brands = [
            'Louisaluna',
            'Kalana',
            'Purukambera',
            'Kamila Wardrobe',
            'Prive Hijab',
            'Greysi',
        ];
        foreach ($brands as $brand) {
            DataMaster::create([
                "name"=>$brand,
                'tipe_master_data'=>'brand'
            ]);
        }
    }
}
