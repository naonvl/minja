<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::create([
            'name' => 'root',
            'email' => 'admin@example.com',
            'password' => bcrypt('natestudio.23'),
            'user_types' => 0,
            'active' => true
        ]);
    }
}
