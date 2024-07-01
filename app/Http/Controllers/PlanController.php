<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use App\Models\Image;
use App\Models\File;
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
        $plans = Plan::with('images')->orderBy('id', "desc")->paginate(10);
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
        ];

        $request->validate($rules);

        $plan = new Plan(); //retreave pan table

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

        return \to_route('plans.edit', $plan);
    }

    /**
     * Display the specified resource.
     */
    public function show(Plan $pn)
    {
        $plan = Plan::where("id", $pn->id)->with('images')->first();
        return redirect(route("plans.edit", $pn));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Plan $plan)
    {
        $images = Image::where("ref_id", $plan->id)->where("type", "plan")->get();
        $files = File::where("ref_id", $plan->id)->where("type", "plan")->get();
        return Inertia::render('Plans/Edit', ['plan'=>$plan, "images" =>$images, "files" =>$files]);
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

        return back()->with("message", 'Plan information successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Plan $plan){
        if(Plan::find($plan)){
            try{
                File::while('plan_id', $plan->id)->delete();
                Image::while('plan_id', $plan->id)->delete();

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

    // search plans
    public function searchplan(Request $request){
        $search = $request->search;

        $plans = Plan::where('price', $search)
                        ->orWhere('name', 'LIKE', '%'.$search.'%')
                        ->orWhere('style', 'LIKE', '%'.$search.'%')
                        ->orWhere('roof_finish', 'LIKE', '%'.$search.'%')
                        ->orWhere('bedrooms', 'LIKE', '%'.$search.'%')
                        ->orWhere('bathrooms', 'LIKE', '%'.$search.'%')
                        ->orWhere('levels', 'LIKE', '%'.$search.'%')
                        ->orWhere('area', 'LIKE', '%'.$search.'%')
                        ->orWhere('description', 'LIKE', '%'.$search.'%')->with('images')->paginate(100);

        return Inertia::render("Plans",["plans" => $plans]);
    }

    // filter plans
    public function filter($filter){
// dd($filter);
        $plans = Plan::with('images')->where('style', $filter)
                        ->orWhere('name', $filter)->paginate(100);
        return Inertia::render("Plans",["plans" => $plans]);
    }

    function download(Request $request, $item) {
        $plan = Plan::where('id', $item)->first();
        $files = File::while('plan_id', $plan->id)->get();
        $images = Image::while('plan_id', $plan->id)->get();
        $fileurls = [];
        $imageurls = [];

        if ($files) {
            foreach($files as $file){
                $fileurls[] = Storage::temporaryUrl( $file->file, now()->addDays(2));
            }
        }

        if ($images) {
            foreach($images as $image){
                $imageurls[] = Storage::temporaryUrl( $image->image, now()->addDays(2));
            }
        }

        return Inertia::render('Download', ['files'=>$fileurls, 'images'=>$imageurls]);
    }
}
