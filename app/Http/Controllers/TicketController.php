<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Vehicle;
use App\Models\Route;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // tickets with pagination 20
        $tickets = Ticket::paginate(20);

        return Inertia::render('Ticket/index', ['tickets'=>$tickets]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $vehicles = Vehicle::all();
        $route_names = Route::all();

        // return Inertia::render('Ticket/create');
        return Inertia::render('Ticket/create', [
            'vehicles' => $vehicles,
            'route_names' => $route_names,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //validate request
        $request->validate([
            'name' => 'required|string',
            'phone' => 'required|string|max:20',
            'route_name_id' => 'required|string',
            'vehicle_id' => 'required|string',
            'nrc' => 'required|string',
            'gender' => 'nullable|string',
            'age' => 'nullable|string',
            'amout' => 'required|numeric',
            'insurance' => 'nullable|numeric',
            'nok_name' => 'nullable|string',
            'nok_phone' => 'nullable|string',
            'nok_name_2' => 'nullable|string',
            'nok_phone_2' => 'nullable|string',
            'price' => 'required|numeric',
            'status' => 'nullable|string',
        ]);

        //create ticket
        $ticket = Ticket::create([
            'user_id' => $request()->user()->id,
            'vehicle_id' => $request()->vehicle_id,
            'route_name_id' => $request()->route_name_id,
            'seat_number' => $request()->seat_number,
            'departure_date' => $request()->departure_date,
            'departure_time' => $request()->departure_time,
            'name' => $request()->name,
            'phone' => $request()->phone,
            'nrc' => $request()->nrc,
            'gender' => $request()->gender,
            'age' => $request()->age,
            'insurance' => $request()->insurance,
            'nok_name' => $request()->nok_name,
            'nok_phone' => $request()->nok_phone,
            'nok_name_2' => $request()->nok_name_2,
            'nok_phone_2' => $request()->nok_phone_2,
            'price' => $request()->price,
            'status' => $request()->status,
        ]);

        //redirect to tickets
        return redirect()->route('tickets.create');

    }

    /**
     * Display the specified resource.
     */
    public function show(Ticket $ticket)
    {
        // find ticket
        $ticket = Ticket::find($ticket->id);

        // return Inertia view
        return Inertia::render('Ticket/show', [
            'ticket' => $ticket,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ticket $ticket)
    {
        // return Inertia view
        return Inertia::render('Ticket/edit', [
            'ticket' => $ticket,
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ticket $ticket)
    {
        // validate request
        $request->validate([
            'name' => 'required|string',
            'phone' => 'required|string|max:20',
            'route_name_id' => 'required|string',
            'vehicle_id' => 'required|string',
            'nrc' => 'required|string',
            'gender' => 'nullable|string',
            'age' => 'nullable|string',
            'amout' => 'required|numeric',
            'insurance' => 'nullable|numeric',
            'nok_name' => 'nullable|string',
            'nok_phone' => 'nullable|string',
            'nok_name_2' => 'nullable|string',
            'nok_phone_2' => 'nullable|string',
            'price' => 'required|numeric',
            'status' => 'nullable|string',
        ]);

        // update ticket
        Ticket::update([
            'user_id' => $request()->user()->id,
            'vehicle_id' => $request()->vehicle_id,
            'route_name_id' => $request()->route_name_id,
            'seat_number' => $request()->seat_number,
            'departure_date' => $request()->departure_date,
            'departure_time' => $request()->departure_time,
            'name' => $request()->name,
            'phone' => $request()->phone,
            'nrc' => $request()->nrc,
            'gender' => $request()->gender,
            'age' => $request()->age,
            'insurance' => $request()->insurance,
            'nok_name' => $request()->nok_name,
            'nok_phone' => $request()->nok_phone,
            'nok_name_2' => $request()->nok_name_2,
            'nok_phone_2' => $request()->nok_phone_2,
            'price' => $request()->price,
            'status' => $request()->status,
        ]);

        // redirect to tickets
        return redirect()->route('tickets.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ticket $ticket)
    {
        // delete ticket
        Ticket::delete($ticket->id);
    }
}
