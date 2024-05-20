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


        $uniqueOrderNumber = strtoupper(str_replace('.', '', uniqid('', true)));
        $invoice = SalesInvoices::where('id',$id)->with('client','currenc')->first();
        $currency = $invoice->currenc->code;
        $transactionName = "Being payment for Invoice No.".$invoice->id;

        $maxAttempts = 3;
        $attempts = 0;
        $payment_process = [];


            try{
                $payment_process = (new Sparco)->initiatePayment($uniqueOrderNumber,$currency,$invoice->total,$transactionName,$customerFirstName,$customerLastName,$customerEmail,$customerPhone);
            }
            catch (Exception $error){
                $payment_process['error'] = $error;
            }

            if($payment_process['success'])
            {
                $invoice->payment_link = $payment_process['url'];
                $invoice->payment_ref = $uniqueOrderNumber;
                $invoice->save();
                return ['success'=>true,'url'=>$payment_process['url']];
            }

        return ['success'=>false,'error'=>$payment_process['error']];
    }
}
