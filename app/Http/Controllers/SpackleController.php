<?php

namespace App\Http\Controllers;

use App\Models\Spackle;
use App\Models\Invoice;
use App\Models\Plan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SpackleController extends Controller
{
    public function makePayment(Request $request, $item) {
        $rules = [
            'fname' => 'required|string',
            'lname' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string'
        ];

        $request->validate($rules);
        $invoice = new Invoice();
        $plan = Plan::where('id', $item)->first();

        if(!$plan){
            return redirect()->back()->with("sessionmessage", ['title' => 'error', "message" => 'Plan item not found!']);
        }

        $invoice->plan_id = $plan->id;
        $invoice->transactionName = "Being payment for: ".$plan->name . " Plan design";
        $invoice->amount = $plan->price;
        $invoice->currency = "ZMW";
        $invoice->transactionReference = strtoupper(str_replace('.', '', uniqid('', true)));
        $invoice->customerFirstName = $request->fname;
        $invoice->customerLastName = $request->lname;
        $invoice->customerEmail = $request->email;
        $invoice->customerPhone = $request->phone;
        $invoice->customerAddr = '';
        $invoice->customerCity = '';
        $invoice->customerState = '';
        $invoice->customerCountryCode = 'ZM';
        $invoice->customerPostalCode = '';
        $invoice->merchantPublicKey = '';
        $invoice->webhookUrl = '';
        $invoice->autoReturn = '';

        $maxAttempts = 3;
        $attempts = 0;
        $payment_process = [];

        try{
            $payment_process = (new Spackle)->initiatePayment($invoice);
        }
        catch (Exception $error){
            $payment_process['error'] = $error;
        }

        if($payment_process['success'])
        {

            $invoice->payment_link = $payment_process['url'];
            $invoice->status = 'created';
            $invoice->save();
            return redirect(route('invoice.preview', $invoice));
        }
        $invoice->comment = $payment_process['error'];
        $invoice->status = 'create faild';
        $invoice->save();

        return \back()->withErrors(['success'=>false,'error'=>$payment_process['error']]);
    }

    function invoicePreview(Request $request, $item) {
        $invoice = Invoice::where('id', $item)->first();
        return Inertia::render('InvoicePreview', ['invoice'=>$invoice]);
    }
}
