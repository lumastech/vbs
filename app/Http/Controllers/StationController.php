<?php

namespace App\Http\Controllers;

use App\Models\Station;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // get stations
        $stations = Station::paginate(20);
        // return Inertia view
        return Inertia::render('Station/index', [
            'stations' => $stations,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // return Inertia view
        return Inertia::render('Station/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // validate request
        $request->validate([
            'name' => 'required|string',
            'phone' => 'required|string',
            'status' => 'required|string',
            'address' => 'required|string',
        ]);

        // create station
        Station::create([
            'user_id' => auth()->user()->id, // 'user_id' => '1
            'name' => $request->name,
            'phone' => $request->phone,
            'address' => $request->address,
            'status' => $request->status,
        ]);

        // redirect to stations
        return redirect()->route('stations.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Station $station)
    {
        // return Inertia view
        return Inertia::render('Station/Show', [
            'station' => $station,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Station $station)
    {
        // return Inertia view
        return Inertia::render('Station/edit', [
            'station' => $station,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Station $station)
    {
        // validate request
        $request->validate([
            'name' => 'required|string',
            'phone' => 'required|string',
            'address' => 'required|string',
            'status' => 'required|string',
        ]);

        // update station
        $station->update([
            'name' => $request->name,
            'phone' => $request->phone,
            'address' => $request->address,
            'status' => $request->status,
        ]);

        // redirect to stations
        return redirect()->route('stations.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Station $station)
    {
        // delete station
        $station->delete();
    }
}
