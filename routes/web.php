<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Home;
use Illuminate\Support\Facades\Route;

Route::get("/", [Home::class, "index"]);
Route::prefix('auth')->group(function () {
    Route::get("/signin", [AuthController::class, "login"]);
    Route::post('/signin', [AuthController::class, "loginP"]);
});
