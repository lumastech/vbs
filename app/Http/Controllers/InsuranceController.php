<?php

namespace App\Http\Controllers;

use App\Models\Insurance;
use Illuminate\Http\Request;

class InsuranceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // get all insurances with pagination 15 with user
        $insurances = Insurance::with('user')->paginate(15);

        // return inertia view
        return inertia('Insurance/index', [
            'insurances' => $insurances,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // return inertia view
        return inertia('Insurance/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // validate request
        $request->validate([
            'name' => 'required|string',
            'price' => 'required|numeric',
        ]);

        // create insurance
        Insurance::create([
            'user_id' => auth()->user()->id, // get current user id from auth
            'name' => $request->name,
            'price' => $request->price,
        ]);

        // return inertia view
        return redirect()->back()->with('success', 'Insurance created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Insurance $insurance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Insurance $insurance)
    {
        // return inertia view
        return inertia('Insurance/edit', [
            'insurance' => $insurance,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Insurance $insurance)
    {
        // validate request
        $request->validate([
            'name' => 'required|string',
            'price' => 'required|numeric',
        ]);

        // update insurance
        $insurance->update([
            'name' => $request->name,
            'price' => $request->price,
        ]);

        // return redirect to index with success message
        return redirect()->route('insurance.index')->with('success', 'Insurance updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Insurance $insurance)
    {
        // delete insurance
        $insurance->delete();
    }
}
