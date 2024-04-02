<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{

    // render landing page
    public function home() {
        $plans = Plan::orderBy('id', 'desc')->paginate(12);
        $new_plans = Plan::orderBy('id', 'desc')->limit(4)->get();
        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'plans' => $plans,
            'new_plans' => $new_plans,
        ]);
    }

    // plan show
    public function planshow($id) {
        $plan = Plan::find($id);
        // popular algo plan
        $plans = Plan::orderBy('id', 'desc')->paginate(8);
        return Inertia::render('Plan',['plan' => $plan, 'plans' => $plans]);
    }

    // dedicated page for listing all plnas with pagination
    public function plans() {
        $plans = Plan::orderBy('id', 'desc')->paginate(20);
        $new_plans = Plan::orderBy('id', 'desc')->limit(4)->get();
        return Inertia::render('Plans', [
            'plans' => $plans,
            'new_plans' => $new_plans,
        ]);
    }
}
