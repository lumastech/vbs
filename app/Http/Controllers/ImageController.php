<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
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
    public function store(Request $request)
    {
        //image validation rules
        $image_rules = [
            'name' => 'nullable|string',
            'type' => 'string',
            'file' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048'
        ];

        // dd($request->file('file'));

        $request->validate($image_rules);
        $image = new Image();
        $image->ref_id = $request->plan;
        $image->name = $request->name? $request->name : "Image";
        $image->image = '/storage/'.$request->file("file")->store('images/plans');
        $image->save();

        return redirect()->back()->with("sessionmessage", ['title' => 'success', "message" => 'Plan Image uploaded successfully']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Image $image)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Image $image)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Image $image)
    {
        // dd($image);
        if(Image::where("id", $image->id)->delete()){
            return redirect()->back()->with("sessionmessage", ['title' => 'success', "message" => 'Imane deleted']);
        }
    }
}
