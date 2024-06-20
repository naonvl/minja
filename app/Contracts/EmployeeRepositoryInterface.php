<?php


namespace App\Contracts;

interface EmployeeRepositoryInterface
{
    public function getById(string $id);
}
