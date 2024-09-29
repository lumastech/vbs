<?php

namespace App\Http\Controllers;

use App\Models\LoanPackage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller
{
    function index() {
        $parckages = LoanPackage::all();
        return Inertia::render('Settings/index', ['parckages' => $parckages]);
    }
}
