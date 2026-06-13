<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Home;
use Illuminate\Support\Facades\Route;

Route::get("/", [Home::class, "index"]);
Route::get("/auth/signin", [AuthController::class, "login"]);
