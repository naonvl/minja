<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $role = Role::create([
            'name' => 'Root',
        ]);
        User::create([
            'email' => 'natestudio@example.com',
            'username' => 'natestudio',
            'password' => bcrypt('natestudio23'),
            'role_id' => $role->id,
            'status' => 1,
            'user_type' => 0,
        ]);
    }
}
