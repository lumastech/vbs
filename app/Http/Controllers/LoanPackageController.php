<?php

namespace App\Http\Controllers;

use App\Models\LoanPackage;
use Illuminate\Http\Request;
use App\Http\Requests\LoanPackageRequest;

class LoanPackageController extends Controller
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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LoanPackageRequest $request)
    {
        if(LoanPackage::create($request->validated())){
            return \back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(LoanPackage $loanPackage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(LoanPackage $loanPackage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, LoanPackage $loanPackage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($loanPackage)
    {
        // dd($loanPackage);
        LoanPackage::where('id', $loanPackage)->first()->delete();
        return \back();
    }
}
