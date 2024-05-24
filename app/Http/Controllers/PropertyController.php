<?php

namespace App\Http\Controllers;

use App\Models\Property;
use App\Models\PropertyType;
use App\Models\Image;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Property::with('images')->orderBy('id', "desc")->paginate(10);
        return Inertia::render("Property/Index",["items" => $items]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $property_types = PropertyType::all();
        return Inertia::render("Property/Create", ["property_types" => $property_types]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => "string|required",
            'description' => "string|required",
            'price' => "nullable|numeric",
            'address' => "string|required",
            'city' => "string|required",
            'state' => "string|required",
            'postal_code' => "nullable|string",
            'country' => "string|required",
            'bedrooms' => "nullable|numeric",
            'bathrooms' => "nullable|numeric",
            'square_feet' => "nullable|numeric",
            'lot_size' => "nullable|numeric",
            'property_type_id' => "numeric|required",
            'status' => 'nullable|string',
        ]);

        $property = new Property(); //retreave pan table

        // insert into property table
        $property->title = $request->title;
        $property->description = $request->description;
        $property->price = $request->price;
        $property->address = $request->address;
        $property->city = $request->city;
        $property->state = $request->state;
        $property->postal_code = $request->postal_code;
        $property->country = $request->country;
        $property->bedrooms = $request->bedrooms;
        $property->bathrooms = $request->bathrooms;
        $property->square_feet = $request->square_feet;
        $property->lot_size = $request->lot_size;
        $property->property_type_id = $request->property_type_id;
        $property->status = isset($request->status)? $request->status : null;
        $property->save();

        return \to_route('property.edit', $property);
    }

    /**
     * Display the specified resource.
     */
    public function show(Property $property)
    {
        $property = Property::where("id", $pn->id)->with('images')->first();
        return redirect(route("property.edit", $pn));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Property $property)
    {
        $images = Image::where("ref_id", $property->id)->where("type", "property")->get();
        $property_types = PropertyType::all();
        return Inertia::render('Property/Edit', ['property'=>$property, "images" =>$images, "property_types" => $property_types]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Property $property)
    {
        // dd($property);
        $request->validate([
            'title' => "string|required",
            'description' => "string|required",
            'price' => "nullable|numeric",
            'address' => "string|required",
            'city' => "string|required",
            'state' => "string|required",
            'postal_code' => "nullable|string",
            'country' => "string|required",
            'bedrooms' => "nullable|numeric",
            'bathrooms' => "nullable|numeric",
            'square_feet' => "nullable|numeric",
            'lot_size' => "nullable|numeric",
            'property_type_id' => "numeric|required",
            'status' => 'required|string',
        ]);

        // update into property table
        $property->title = $request->title;
        $property->description = $request->description;
        $property->price = $request->price;
        $property->address = $request->address;
        $property->city = $request->city;
        $property->state = $request->state;
        $property->postal_code = $request->postal_code;
        $property->country = $request->country;
        $property->bedrooms = $request->bedrooms;
        $property->bathrooms = $request->bathrooms;
        $property->square_feet = $request->square_feet;
        $property->lot_size = $request->lot_size;
        $property->property_type_id = $request->property_type_id;
        $property->status = isset($request->status)? $request->status : null;
        $property->update();

        return back()->with("message", 'Property information successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Property $property)
    {
        //
    }
}
