<?php

namespace App\Http\Controllers;

use App\Models\Loan;
use App\Models\LoanPackage;
use App\Http\Requests\LoanRequest;
use App\Models\Utility;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // current get current user id
        $user = \auth()->user();
        if ($user->role == 'admin') {
            $loans = Loan::orderBy('created_at', 'desc')->paginate(15);
        } else{
            $loans = Loan::where('user_id', $user->id)->orderBy('created_at', 'desc')->paginate(15);
        }
        return Inertia::render('Loans/index', ['loans' => $loans]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(){
        $user = \auth()->user();
        // user with pagination 15
        if ($user->role == 'admin') {
            $loans = Loan::orderBy('created_at', 'desc')->paginate(15);
            $packages = LoanPackage::orderBy('amount', 'desc')->get();
        } else {
            $loans = Loan::where('user_id', $user->id)->orderBy('created_at', 'desc')->paginate(15);
            $packages = LoanPackage::orderBy('amount', 'desc')->get();
        }

        return Inertia::render('Loans/create', ['loans' => $loans, 'loan_packages' => $packages]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LoanRequest $request)
    {
        $data = $request->validated();
        if($package = LoanPackage::where('id', $data['loan_package_id'])->first()){

            $n = \auth()->user()->name;
            $data['user_id'] = \auth()->user()->id;
            $data['rate'] = $package->rate;
            $data['amount'] = $package->amount;
            $data['term'] = $package->duration;
            if(Loan::create($data)){
                $util = new Utility();
                $util->audit('loan', $data['amount'], $n.' has applied for a loan ('. $package->name . ') @ ' . $package->rate . '% for '.$package->duration .' Months.' );
                return redirect()->back()->with("sessionmessage", ['title' => 'success', "message" => 'Your loan has been created successfully']);
            }
        }

        return redirect()->back()->with("sessionmessage", ['title' => 'error', "message" => 'we faild to save your request at the moment']);
    }

    /**
     * Display the specified resource.
     */
    public function show($item){
        $packages = LoanPackage::orderBy('amount', 'desc')->get();
        $loan = Loan::find($item);
        return Inertia::render('Loans/edit', ['loan' => $loan, 'loan_packages' => $packages]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Loan $item) {
        $packages = LoanPackage::orderBy('amount', 'desc')->get();
        return Inertia::render('Loans/edit', ['loan' => $item, 'loan_packages' => $packages]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(LoanRequest $request, Loan $loan)
    {
         $data = $request->validated();
        if($package = LoanPackage::where('id', $data['loan_package_id'])->first()){
            $n = \auth()->user()->name;
            $data['rate'] = $package->rate;
            $data['amount'] = $package->amount;
            $data['term'] = $package->duration;
            if($loan->update($data)){
                $util = new Utility();
                $util->audit('loan', $data['amount'], $n.' has updated a loan' );
                return redirect()->back()->with("sessionmessage", ['title' => 'success', "message" => 'Your loan has been created successfully']);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($item){
        if($loan = Loan::where('id', $item)->first()){
            if($loan->delete()){
                $n = \auth()->user()->name;
                $util = new Utility();
                $util->audit('delete', '0', $n.' has deleted a loan transaction' );
            }
        }
        return \back();
    }

    function approve($item, $action) {
        if($loan = Loan::where('id', $item)->first()){
            $loan->update(['status' => $action]);
            $n = \auth()->user()->name;
            $util = new Utility();
            $util->audit('Approve', '0', $n.' has '.$action.' a loan transaction' );
        }
    }
}
