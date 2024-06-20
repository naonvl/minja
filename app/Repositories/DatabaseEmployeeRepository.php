<?php

namespace App\Repositories;

use App\Models\Employee;
use App\Contracts\EmployeeRepositoryInterface;

class DatabaseEmployeeRepository implements EmployeeRepositoryInterface
{
    public function getById(string $id)
    {
        return Employee::with([
            'user',
            'salaries' => function ($query) {
                $query->with(['taskType', 'product']);
            },
            'department',
            'benefits',
            'activities'
        ])
        ->whereId($id)
        ->firstOrFail();
    }

    public function getActiveEmployees()
    {
        return Employee::active()->get();
    }
}
