<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use App\Models\Image;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Jenssegers\Agent\Facades\Agent;

class PlanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $plans = Plan::orderBy('id', "desc")->with('images')->paginate(10);
        return Inertia::render("Plans/Index",["plans" => $plans]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Plans/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request){
        // strings validation rules

        $rules = [
            'name' => 'string|required',
            'price' => 'numeric|required',
            'bedrooms' => 'nullable|numeric',
            'bathrooms' => 'nullable|numeric',
            'levels' => 'nullable|numeric',
            'style' => 'nullable|string',
            'roof_finish' => 'nullable|string',
            'area' => 'nullable|numeric',
            'description' => 'nullable|string',
            'image_1' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:4048',
            'image_2' => $image_rules,
            'image_3' => $image_rules,
            'image_4' => $image_rules,
            'image_5' => $image_rules,
            'image_6' => $image_rules,
            'image_7' => $image_rules,

            'file_1' => 'nullable',
            'file_2' => 'nullable',
            'file_3' => 'nullable',
            'file_4' => 'nullable',
            'file_5' => 'nullable',
            'file_6' => 'nullable',
        ];

        $request->validate($rules);

        $plan = new Plan(); //retreave pan table

        // prepare images for upload
        //insert into plan table
        $imagefiles = [
            'image_1' => $request->file('image_1'),
            'image_2' => $request->file('image_2'),
            'image_3' => $request->file('image_3'),
            'image_4' => $request->file('image_4'),
            'image_5' => $request->file('image_5'),
            'image_6' => $request->file('image_6'),
            'image_7' => $request->file('image_7'),
        ];

        //upload images
        foreach ($imagefiles as $key => $file) {
            if ($file) {
                $plan->$key = '/storage/'.$file->store('images/plans');
            }
        }

        // prepare files for upload
        //insert into plan table
        $dfiles = [
            'file_1' => $request->file('file_1'),
            'file_2' => $request->file('file_2'),
            'file_3' => $request->file('file_3'),
            'file_4' => $request->file('file_4'),
            'file_5' => $request->file('file_5'),
            'file_6' => $request->file('file_6'),
        ];

        foreach ($dfiles as $key => $file) {
            if ($file) {
                $plan->$key = $file->store('/files/plans');
            }
        }

        // insert into plan table
        $plan->name = $request->name;
        $plan->price = $request->price;

        $plan->bedrooms = $request->bedrooms;
        $plan->bathrooms = $request->bathrooms;
        $plan->levels = $request->levels;

        $plan->style = $request->style;
        $plan->roof_finish = $request->roof_finish;

        $plan->area = $request->area;

        $plan->description = $request->description;
        $plan->save();

        return \to_route('plans.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Plan $plan)
    {
        return redirect(route("plans.edit", $plan));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Plan $plan)
    {
        $images = Image::where("ref_id", $plan->id)->where("type", "plan")->get();
        return Inertia::render('Plans/Edit', ['plan'=>$plan, "images" =>$images]);
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, Plan $plan)
    {
        // dd($plan);
        $rules = [
            'name' => 'string|required',
            'price' => 'numeric|required',
            'bedrooms' => 'nullable|numeric',
            'bathrooms' => 'nullable|numeric',
            'levels' => 'nullable|numeric',
            'style' => 'nullable|string',
            'roof_finish' => 'nullable|string',
            'area' => 'nullable|numeric',
            'description' => 'nullable|string',
        ];




        $request->validate($rules);

        // update into plan table
        $plan->name = $request->name;
        $plan->price = $request->price;

        $plan->bedrooms = $request->bedrooms;
        $plan->bathrooms = $request->bathrooms;
        $plan->levels = $request->levels;

        $plan->style = $request->style;
        $plan->roof_finish = $request->roof_finish;

        $plan->area = $request->area;

        $plan->description = $request->description;
        $plan->update();




        return Inertia::render('Plans/Edit', ['plan'=>$plan, 'title' => 'success', "message" => 'Plan information successfully updated']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Plan $plan){
        if(Plan::find($plan)){
            try{
                $files = [
                    'file_1' => $plan->image_1??'',
                    'file_2' => $plan->image_2??'',
                    'file_3' => $plan->image_3??'',
                    'file_4' => $plan->image_4??'',
                    'file_5' => $plan->image_5??'',
                    'file_6' => $plan->image_6??'',
                    'file_7' => $plan->image_7??'',

                    'file_8' => $plan->file_1??'',
                    'file_9' => $plan->file_2??'',
                    'file_10' => $plan->file_3??'',
                    'file_11' => $plan->file_4??'',
                    'file_12' => $plan->file_5??'',
                    'file_13' => $plan->file_6??'',
                ];

                foreach ($files as $key => $file) {
                    $file = \str_replace('/storage/','', $file);
                    if ($file && Storage::exists($file)) {
                        Storage::delete($file);
                    }
                }
                $plan->delete();
                session([
                'message'=>[
                    'title'=>'Success',
                    'message'=>'plan files deleted successfully!'
                    ]
                ]);
            } catch(Throwable $e){
                session([
                'message'=>[
                    'title'=>'error',
                    'message'=>'Something went wrong!: '. $e
                    ]
                ]);
            }
        }else{
            session([
                'message'=>[
                    'title'=>'error',
                    'message'=>'404 : Plan not found'
                    ]
                ]);
        }
        return redirect()->back();
    }
}
