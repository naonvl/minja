<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\DataMasterController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\SalaryController;
use App\Http\Controllers\BenefitController;
use App\Http\Controllers\PayslipController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);

    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::get('logout', [AuthController::class, 'logout']);
        Route::get('user', [AuthController::class, 'user']);
    });
});

Route::group(['middleware' => 'auth:sanctum'], function () {
    // Users
    Route::group(['prefix' => 'users'], function () {
        Route::get('/', [UserController::class, 'index']);
        Route::post('/', [UserController::class, 'store']);
        Route::get('{id}', [UserController::class, 'show']);
        Route::put('{id}', [UserController::class, 'update']);
        Route::delete('{id}', [UserController::class, 'destroy']);
    });

    // Activities
    Route::group(['prefix' => 'activities'], function () {
        Route::get('/', [ActivityController::class, 'index']);
        Route::post('/', [ActivityController::class, 'store']);
        Route::get('{id}', [ActivityController::class, 'show']);
        Route::put('{id}', [ActivityController::class, 'update']);
        Route::delete('{id}', [ActivityController::class, 'destroy']);
    });
    Route::apiResource('data-masters', DataMasterController::class);
    Route::apiResource('employees', EmployeeController::class);
    Route::post('/employees/fire', [EmployeeController::class, 'fireEmployee']);
    // Route::get('/employees/{id}', [EmployeeController::class, 'getEmployeeByUser']);
    Route::post('/generate-payslip', [PayslipController::class, 'generate']);
    Route::post('/payall-payslip', [PayslipController::class, 'payAll']);
    Route::post('/unpaidall-payslip', [PayslipController::class, 'unpaidAll']);
    Route::get('/payslips/user/{employee_id}', [PayslipController::class, 'getTotalPayslips']);
    Route::apiResource('salaries', SalaryController::class);
    Route::apiResource('benefits', BenefitController::class);
    Route::apiResource('payslips', PayslipController::class);

    // Data Masters
});
// Route::group(['prefix' => 'data-masters'], function () {
//     Route::get('/', [DataMasterController::class, 'index']);
//     Route::post('/', [DataMasterController::class, 'store']);
//     Route::get('{id}', [DataMasterController::class, 'show']);
//     Route::put('{id}', [DataMasterController::class, 'update']);
//     Route::delete('{id}', [DataMasterController::class, 'destroy']);
// });

