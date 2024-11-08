<?php

namespace App\Http\Controllers;

use App\Models\Saving;
use App\Models\LoanPackage;
use App\Http\Requests\SavingRequest;
use App\Models\Utility;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SavingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = \auth()->user();
        if ($user->role == 'admin') {
            $savings = Saving::where('user_id', $user->id)->orderBy('created_at', 'desc')->paginate(15);
        } else {
            $savings = Saving::orderBy('created_at', 'desc')->paginate(15);
        }
        return Inertia::render('Savings/index', ['savings' => $savings]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = \auth()->user();
        // user with pagination 15
        if ($user->role == 'admin') {
            $savings = Saving::where('user_id', $user->id)->orderBy('created_at', 'desc')->paginate(15);
            $packages = LoanPackage::orderBy('amount', 'desc')->get();
        } else {
            $savings = Saving::orderBy('created_at', 'desc')->paginate(15);
            $packages = LoanPackage::orderBy('amount', 'desc')->get();
        }
        return Inertia::render('Savings/create', ['savings' => $savings, 'saving_packages' => $packages]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SavingRequest $request)
    {
        $data = $request->validated();
        $msg = '';
        if($package = LoanPackage::where('id', $data['loan_package_id'])->first()){
            $description = \env('APP_NAME') . $package->name;
            $phone = \auth()->user()->phone;
            $isp = 'aitel';
            $data['user_id'] = \auth()->user()->id;
            $data['rate'] = $package->rate;
            $data['amount'] = $package->amount;
            $data['term'] = $package->duration;
            $saving = Saving::create($data);
            if($saving){
                $util = new Utility();
                $n = \auth()->user()->name;
                $util = new Utility();
                $util->audit('Savings', $data['amount'], $n.' has applied for a savinges ('. $package->name . ') @ ' . $package->rate . '% for '.$package->duration .' Months.' );
                $curl = curl_init();
                curl_setopt_array($curl, $util->pawapay('deposits', 'POST', $saving->id, '', $saving->amount, $isp, $phone, $description));
                $response = curl_exec($curl);
                $err = curl_error($curl);
                if(json_decode($response)['status'] = 'ACCEPTED'){
                    $msg = 'Your saving has been created successfully';
                    $msg = $response;
                }elseif($err){
                    $msg = json_decode($err)['errorMessage'];
                }
                curl_close($curl);
                return redirect()->back()->with("sessionmessage", ['title' => 'success', "message" => $msg]);
            }
        }

        return redirect()->back()->with("sessionmessage", ['title' => 'error', "message" => 'we faild to save your request at the moment']);
    }

    /**
     * Display the specified resource.
     */
    public function show($item){
        $packages = LoanPackage::orderBy('amount', 'desc')->get();
        $saving = Saving::find($item);
        return Inertia::render('Savings/edit', ['saving' => $saving, 'saving_packages' => $packages]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($item) {
       $packages = LoanPackage::orderBy('amount', 'desc')->get();
        $saving = Saving::find($item);
        return Inertia::render('Savings/edit', ['saving' => $saving, 'saving_packages' => $packages]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SavingRequest $request, Saving $saving)
    {
         $data = $request->validated();
        if($package = LoanPackage::where('id', $data['loan_package_id'])->first()){
            $n = \auth()->user()->name;
            $data['rate'] = $package->rate;
            $data['amount'] = $package->amount;
            $data['term'] = $package->duration;
            if($saving->update($data)){
                $util = new Utility();
                $util->audit('Update', $data['amount'], $n.' has updated a savings transaction' );
                return redirect()->back()->with("sessionmessage", ['title' => 'success', "message" => 'Your saving has been created successfully']);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($item)
    {
        if($saving = Saving::where('id', $item)->first()){
            if($saving->delete()){
                $n = \auth()->user()->name;
                $util = new Utility();
                $util->audit('delete', '0', $n.' has deleted a savings transaction' );
            }
        }
    }

    function approve($item, $action) {
        if($saving = Saving::where('id', $item)->first()){
            $saving->update(['status' => $action]);
            $n = \auth()->user()->name;
            $util = new Utility();
            $util->audit('Approve', '0', $n.' has '.$action.' a savings transaction' );
        }
        return \back();
    }
}
