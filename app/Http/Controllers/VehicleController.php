<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // get all vehicles with pagination 20
        $vehicles = Vehicle::paginate(20);

        // return  index view
        return inertia('Vehicle/index', compact('vehicles'));

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // return create view
        return inertia('Vehicle/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // validate request
        $request->validate([
            'name' => 'required',
            'departure_time' => 'required',
            'capacity' => 'required',
            'status' => 'required',
        ]);

        // dd($request->all());

        // create new vehicle
        Vehicle::create([
            'name' => $request->name,
            'user_id' => auth()->user()->id,
            'departure_time' => $request->departure_time,
            'capacity' => $request->capacity,
            'status' => $request->status,
        ]);

        // redirect to vehicles index
        return redirect()->back()->with('success', 'Vehicle created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Vehicle $vehicle)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vehicle $vehicle)
    {
        // return edit view
        return inertia('Vehicle/edit', compact('vehicle'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vehicle $vehicle)
    {
        //  validate request
        $request->validate([
            'name' => 'required',
            'departure_time' => 'required',
            'capacity' => 'required',
            'status' => 'required',
        ]);

        // update vehicle
        $vehicle->update([
            'name' => $request->name,
            'user_id' => auth()->user()->id,
            'departure_time' => $request->departure_time,
            'capacity' => $request->capacity,
            'status' => $request->status,
        ]);

        // redirect to vehicles index
        return redirect()->route('vehicle.index')->with('success', 'Vehicle updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vehicle $vehicle)
    {
        // delete vehicle
        $vehicle->delete();
        // redirect to vehicles index
        return redirect()->route('vehicle.index')->with('success', 'Vehicle Deleted successfully.');
    }
}
