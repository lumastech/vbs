<?php

namespace App\Http\Controllers;

use App\Models\Spackle;
use Illuminate\Http\Request;

class SpackleController extends Controller
{
    public function make_payment(Request $request) {
        $rules = [
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string'
        ];

        $request->validate($rules);
        $spackle = new Spackle();

        $firstname = $request->firstname;
        $lastname = $request->lastname;
        $email = $request->email;
        $phone = $request->phone;
        $plan_id = $request->plan;


        $orderNumber = strtoupper(str_replace('.', '', uniqid('', true)));
        $plan = Plan::where('id', $plan_id)->first();
        $currency = "zmw";
        $transactionName = "Being payment for: ".$plan->name;

        $maxAttempts = 3;
        $attempts = 0;
        $payment_process = [];


            try{
                $payment_process = (new Sparco)->initiatePayment($orderNumber,$currency,$invoice->total,$transactionName,$firstname,$lastname,$email,$phone);
            }
            catch (Exception $error){
                $payment_process['error'] = $error;
            }

            if($payment_process['success'])
            {
                $invoice->payment_link = $payment_process['url'];
                $invoice->payment_ref = $orderNumber;
                $invoice->save();
                return ['success'=>true,'url'=>$payment_process['url']];
            }

        return ['success'=>false,'error'=>$payment_process['error']];
    }
}
