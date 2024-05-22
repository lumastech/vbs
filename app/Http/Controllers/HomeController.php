<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use App\Models\Visitor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Utility;

class HomeController extends Controller
{

    // render landing page
    public function home(Request $request) {
        $utility = new Utility();
        $utility->countVisitors($request);
        $plans = Plan::with('images')->orderBy('id', 'desc')->paginate(12);
        $new_plans = Plan::with('images')->orderBy('id', 'desc')->limit(4)->get();

        $visitors = Visitor::count();
        $plans_count = Plan::count();
        $orders_count = Order::count();
        $orders_all = Order::all();
        $orders = Order::orderByDesc('id')->limit(10)->get();
        $users = User::count();
        $orders_sum = Order::sum('amount')->get();


        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'plans' => $plans,
            'new_plans' => $new_plans,
            'visitors'=>$visitors,
            'orders'=>$orders,
            'orders_sum'=>$orders_sum,
            'users'=>$users,
            'orders_count'=>$orders_count,
            'plans_count'=>$plans_count
        ]);
    }

    // plan show
    public function planshow($id) {
        $plan = Plan::where("id", $id)->with('images')->first();
        // popular algo plan
        $plans = Plan::with('images')->orderBy('id', 'desc')->paginate(8);
        return Inertia::render('Plan',['plan' => $plan, 'plans' => $plans]);
    }

    // dedicated page for listing all plnas with pagination
    public function plans(Request $request) {
        $utility = new Utility();
        $utility->countVisitors($request);
        $plans = Plan::with('images')->orderBy('id', 'desc')->paginate(20);
        $new_plans = Plan::with('images')->orderBy('id', 'desc')->limit(4)->get();
        return Inertia::render('Plans', [
            'plans' => $plans,
            'new_plans' => $new_plans,
        ]);
    }

    // search plans
    public function searchplans(Request $request){
        $search = $request->search;

        $plans = Plan::where('price', $search)
                        ->orWhere('name', 'LIKE', '%'.$search.'%')
                        ->orWhere('style', 'LIKE', '%'.$search.'%')
                        ->orWhere('roof_finish', 'LIKE', '%'.$search.'%')
                        ->orWhere('bedrooms', 'LIKE', '%'.$search.'%')
                        ->orWhere('bathrooms', 'LIKE', '%'.$search.'%')
                        ->orWhere('levels', 'LIKE', '%'.$search.'%')
                        ->orWhere('area', 'LIKE', '%'.$search.'%')
                        ->orWhere('description', 'LIKE', '%'.$search.'%')->get();

        $new_plans = Plan::with('images')->orderBy('id', 'desc')->limit(4)->get();

        return Inertia::render('Plans', [
            'plans' => $plans,
            'new_plans' => $new_plans,
        ]);
    }


}
