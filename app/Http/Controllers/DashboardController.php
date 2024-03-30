<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\Plan;
use App\Models\Visitor;
use App\Models\Order;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index() {
        $users = User::count();
        $visitors = Visitor::count();
        // get plans with pagination
        $plans = Plan::paginate(10);
        $plans_count = Plan::count();
        // plans sum price
        $sales = Order::sum('amount');

        // return inertia view
        return Inertia::render('Dashboard/Dashboard', [
            'users' =>$users,
            'visitors' =>$visitors,
            'plans' => $plans,
            'plans_count' => $plans_count,
            'sales' => $sales,
        ]);
    }
}
