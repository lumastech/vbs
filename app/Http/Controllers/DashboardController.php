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
        $user = \auth()->user();

        // user with pagination 15
        if ($user->role == 'admin') {
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
        } else{
            $users = User::orderBy('created_at', 'desc')->paginate(15);
            $trans = Transaction::where('user_id', $user->id)->orderBy('created_at', 'desc')->paginate(15);
            $totalSavings = Saving::where('user_id', $user->id)->sum('amount');
            $totalLoans = Loan::where('user_id', $user->id)->sum('amount');
            $trans_count = Transaction::where('user_id', $user->id)->count();

            // return inertia view
            return Inertia::render('Dashboard/Dashboard', [
                'users' => null,
                'trans' => $trans,
                'totalSavings' => $totalSavings,
                'totalLoans' => $totalLoans,
                'trans_count' => $trans_count,
            ]);
        }
    }
}
