<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\dashboard\Analytics;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\DataMasterController;

// Main Page Route
Route::get('/', [Analytics::class, 'index'])->name('dashboard');
Route::get('/dashboard', [Analytics::class, 'index'])->name('dashboard');
// locale
// authentication
Route::get('/auth/login', [AuthenticationController::class, 'loginIndex'])->name('auth-login');
Route::get('/auth/reset-password', [AuthenticationController::class, 'resetPasswordIndex'])->name('auth-reset-password');
Route::get('/auth/forgot-password', [AuthenticationController::class, 'forgotPasswordIndex'])->name('auth-forgot-password');

Route::get('/data-master/brand', [DataMasterController::class, 'brandIndex'])->name('data-master-brand');
