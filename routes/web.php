<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\dashboard\Analytics;
use App\Http\Controllers\dashboard\Crm;
use App\Http\Controllers\authentications\LoginCover;
use App\Http\Controllers\authentications\RegisterCover;
use App\Http\Controllers\authentications\ResetPasswordCover;
use App\Http\Controllers\authentications\ForgotPasswordCover;

// Main Page Route
Route::get('/', [Analytics::class, 'index'])->name('dashboard');
Route::get('/dashboard', [Analytics::class, 'index'])->name('dashboard');
Route::get('/dashboard/crm', [Crm::class, 'index'])->name('dashboard-crm');
// locale
// authentication
Route::get('/auth/login-cover', [LoginCover::class, 'index'])->name('auth-login-cover');
Route::get('/auth/register-cover', [RegisterCover::class, 'index'])->name('auth-register-cover');
Route::get('/auth/reset-password-cover', [ResetPasswordCover::class, 'index'])->name('auth-reset-password-cover');
Route::get('/auth/forgot-password-cover', [ForgotPasswordCover::class, 'index'])->name('auth-forgot-password-cover');
