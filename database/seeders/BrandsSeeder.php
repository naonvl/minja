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
        $data = [
            [
                'name' => 'Jahit',
                'type_master_data' => 'department'
            ],
            [
                'name' => 'Admin',
                'type_master_data' => 'department'
            ],
            [
                'name' => 'QC',
                'type_master_data' => 'department'
            ],
            [
                'name' => 'Obras',
                'type_master_data' => 'department'
            ],
            [
                'name' => 'Potong',
                'type_master_data' => 'department'
            ],
            [
                'name' => 'Mukena',
                'type_master_data' => 'produk'
            ],
            [
                'name' => 'Dress',
                'type_master_data' => 'produk'
            ],
            [
                'name' => 'Tunik',
                'type_master_data' => 'produk'
            ],
            [
                'name' => 'Blouse',
                'type_master_data' => 'produk'
            ],
            [
                'name' => 'Mukena Renda',
                'type_master_data' => 'produk'
            ],
            [
                'name' => 'Blouse Murah',
                'type_master_data' => 'produk'
            ],
            [
                'name' => 'Dress Murah',
                'type_master_data' => 'produk'
            ],
            [
                'name' => 'Pashtan',
                'type_master_data' => 'produk'
            ],
            [
                'name' => 'Pashmina',
                'type_master_data' => 'produk'
            ],
            [
                'name' => 'Pashmina Jersey',
                'type_master_data' => 'produk'
            ],
            [
                'name' => 'Bergo',
                'type_master_data' => 'produk'
            ],
            [
                'name' => 'Square Instan',
                'type_master_data' => 'produk'
            ],
            [
                'name' => 'Inner',
                'type_master_data' => 'produk'
            ],
            [
                'name' => 'Tunik Murah',
                'type_master_data' => 'produk'
            ],
            [
                'name' => 'Buang Benang',
                'type_master_data' => 'task'
            ],
            [
                'name' => 'Kecos',
                'type_master_data' => 'task'
            ],
            [
                'name' => 'Jahit',
                'type_master_data' => 'task'
            ],
            [
                'name' => 'Obras',
                'type_master_data' => 'task'
            ],
            [
                'name' => 'Kelime',
                'type_master_data' => 'task'
            ],
            [
                'name' => 'Jahit Tepi',
                'type_master_data' => 'task'
            ],
            [
                'name' => 'Pasang Karet',
                'type_master_data' => 'task'
            ],
            [
                'name' => 'Louisaluna',
                'type_master_data' => 'brand'
            ],
            [
                'name' => 'Kalana',
                'type_master_data' => 'brand'
            ],
            [
                'name' => 'Purukambera',
                'type_master_data' => 'brand'
            ],
            [
                'name' => 'Kamila Wardrobe',
                'type_master_data' => 'brand'
            ],
            [
                'name' => 'Greysi',
                'type_master_data' => 'brand'
            ],
            [
                'name' => 'Prive Hijab',
                'type_master_data' => 'brand'
            ]
        ];
        
        foreach ($data as $item) {
            DataMaster::create([
                'name' => $item['name'],
                'type_master_data' => $item['type_master_data']
            ]);
        }
    }
}
