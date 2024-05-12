<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\dashboard\Analytics;
use App\Http\Controllers\dashboard\Crm;
use App\Http\Controllers\authentications\LoginCover;
use App\Http\Controllers\authentications\RegisterCover;
use App\Http\Controllers\authentications\ResetPasswordCover;
use App\Http\Controllers\authentications\ForgotPasswordCover;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::middleware('auth')->group(function () {
    // Main Page Route
    Route::get('/', [Analytics::class, 'index'])->name('dashboard');
    Route::get('/dashboard', [Analytics::class, 'index'])->name('dashboard');
    Route::get('/dashboard/crm', [Crm::class, 'index'])->name('dashboard-crm');
    // locale
});
Route::get('/auth/login', [LoginCover::class, 'index'])->name('login');
Route::get('/auth/logout', [LoginCover::class, 'destroy'])->name('logout');
Route::post('/auth/login', [LoginCover::class, 'store']);
Route::get('/auth/register-cover', [RegisterCover::class, 'index'])->name('auth-register-cover');
Route::get('/auth/reset-password-cover', [ResetPasswordCover::class, 'index'])->name('auth-reset-password-cover');
Route::get('/auth/forgot-password-cover', [ForgotPasswordCover::class, 'index'])->name('auth-forgot-password-cover');
