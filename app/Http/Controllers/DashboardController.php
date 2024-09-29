<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\Saving;
use App\Models\Loan;
use Illuminate\Http\Request;
use App\Models\Invoice;
use App\Models\Transaction;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index() {
        // user with pagination 15
        $users = User::orderBy('created_at', 'desc')->paginate(15);
        $trans = Transaction::orderBy('created_at', 'desc')->paginate(15);
        $totalSavings = Saving::sum('amount');
        $totalLoans = Loan::sum('amount');
        $trans_count = Transaction::count();

        // return inertia view
        return Inertia::render('Dashboard/Dashboard', [
            'users' => $users,
            'trans' => $trans,
            'totalSavings' => $totalSavings,
            'totalLoans' => $totalLoans,
            'trans_count' => $trans_count,
        ]);
    }
}
