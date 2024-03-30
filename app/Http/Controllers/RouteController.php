<?php

namespace App\Http\Controllers;

use App\Models\Route;
use Illuminate\Http\Request;

class RouteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // get all routes wiith pagination 15
        $routes = Route::with('user')->paginate(20);

        // dd($request->expectsJson );

        //innertia render
        return inertia('Route/index', [
            'routes' => $routes,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // return create view
        return inertia('Route/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // validate request
        $request->validate([
            'name' => 'required|string',
            'from' => 'required|string',
            'to' => 'required|string|different:from',
            'price' => 'required|numeric',
        ]);

        // create route
        Route::create([
            'name' => $request->name,
            'user_id' => auth()->user()->id,
            'from' => $request->from,
            'to' => $request->to,
            'price' => $request->price,
        ]);

        // redirect back with success message
        return redirect()->back()->with('success', 'Route created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Route $route)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Route $rout)
    {
        // dd($rout->id);
        // return edit view
        return inertia('Route/edit', compact('rout'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Route $route)
    {
        // validate request
        $request->validate([
            'name' => 'required|string',
            'from' => 'required|string',
            'to' => 'required|string|different:from',
            'price' => 'required|numeric',
        ]);

        // update route
        $route->update([
            'name' => $request->name,
            'from' => $request->from,
            'to' => $request->to,
            'price' => $request->price,
        ]);

        // redirect back with success message
        return redirect()->back()->with('success', 'Route updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Route $route)
    {
        // delete route
        $route->delete();

        // redirect to routes index
        return redirect()->route('route.index')->with('success', 'Route deleted successfully.');
    }
}
