<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Contracts\EmployeeRepositoryInterface;
use App\Repositories\DatabaseEmployeeRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(EmployeeRepositoryInterface::class, DatabaseEmployeeRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
    }
}
