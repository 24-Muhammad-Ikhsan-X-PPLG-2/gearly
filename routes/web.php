<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Home;
use Illuminate\Support\Facades\Route;

Route::get("/", [Home::class, "index"]);
Route::prefix('auth')->group(function () {
    Route::middleware(['guest'])->group(function () {
        Route::get("/signin", [AuthController::class, "login"])->name('login');
        Route::post('/signin', [AuthController::class, "loginP"]);
        Route::get("/signup", [AuthController::class, "register"])->name('register');

        Route::get('/discord', [AuthController::class, "redirectDC"]);
        Route::get('/discord/callback', [AuthController::class, "callbackDC"]);
    });
    Route::middleware(['auth'])->group(function () {
        Route::get('/logout', [AuthController::class, 'logout']);
    });
});

Route::prefix('profile')->middleware(['auth'])->group(function () {
    Route::get('/', [Home::class, 'profile'])->name('profile');
    Route::get('/seller', [Home::class, 'profileSeller'])->name('profile.seller');
});
