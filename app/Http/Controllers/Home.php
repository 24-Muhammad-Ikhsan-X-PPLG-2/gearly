<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class Home extends Controller
{
    public function index()
    {
        return Inertia::render("landing");
    }
    public function profile()
    {
        return Inertia::render('profile');
    }
    public function profileSeller()
    {
        return Inertia::render('seller-profile');
    }
}
