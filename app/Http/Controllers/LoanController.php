<?php

namespace App\Http\Controllers;

use App\Models\Loan;
use App\Models\LoanPackage;
use App\Http\Requests\LoanRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // user with pagination 15
        $loan = Loan::orderBy('created_at', 'desc')->paginate(15);
        return Inertia::render('Loans/create', ['loan' => $loan,]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LoanRequest $request)
    {
        $data = $request->validated();
        if($package = LoanPackage::where('id', $data['loan_package_id'])->first()){

            $data['user_id'] = auth()->user()->id;
            $data['rate'] = $package->rate;
            $data['term'] = $package->duration;
            if(Loan::create($data)){
                return redirect()->back()->with("sessionmessage", ['title' => 'success', "message" => 'Your loan has been created successfully']);
            }
        }

        return redirect()->back()->with("sessionmessage", ['title' => 'error', "message" => 'we faild to save your request at the moment']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Loan $loan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Loan $loan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Loan $loan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Loan $loan)
    {
        //
    }
}
