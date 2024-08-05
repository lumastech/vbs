<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\Plan;
use App\Models\Visitor;
use Illuminate\Http\Request;
use App\Models\Invoice;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index() {
        // user with pagination 15
        $users = User::orderBy('created_at', 'desc')->paginate(15);
        // return inertia view
        return Inertia::render('Dashboard/Dashboard', [
            'users' => $users,
        ]);
    }
}
