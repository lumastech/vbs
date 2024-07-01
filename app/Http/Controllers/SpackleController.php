<?php

namespace App\Http\Controllers;

use App\Models\Spackle;
use App\Models\Invoice;
use App\Models\Plan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;

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
        $transactionReference = strtoupper(str_replace('.', '', uniqid('', true)));

        if(!$plan){
            return \back()->withErrors(['success'=>false,'error'=>'Plan item not found!']);
        }

        $invoice->plan_id = $plan->id;
        $invoice->transactionName = "Being payment for: ".$plan->name . " Plan design";
        $invoice->amount = $plan->price;
        $invoice->currency = "ZMW";
        $invoice->transactionReference = $transactionReference;
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
        $invoice->webhookUrl =  env('APP_URL')."/invoice-inv/" . $transactionReference;
        $invoice->returnUrl = '';
        $invoice->autoReturn = false;

        $maxAttempts = 3;
        $attempts = 0;
        $payment_process = [];

        try{
            $payment_process = (new Spackle)->initiatePayment($invoice);
        }
        catch (Exception $error){
            $payment_process['error'] = $error;
        }

        if($payment_process['success']) {

            $invoice->payment_link = $payment_process['url'];
            $invoice->reference = $payment_process['reference'];
            $invoice->status = 'pending';
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

    function invoiceUpdate(Request $request, $item) {
        $invoice = Invoice::where("id", $item)->first();

        $invoice = $request->amount;
        $invoice = $request->feeAmount;
        $invoice = $request->transactionAmount;
        $invoice = $request->currency;
        $invoice = $request->customerFirstName;
        $invoice = $request->customerLastName;
        $invoice = $request->customerMobileWallet;
        $invoice = $request->feePercentage;
        $invoice = $request->merchantReference;
        $invoice = $request->reference;
        $invoice = $request->message;
        $invoice = $request->status;
        $invoice = $request->signedFields;
        $invoice = $request->signature;
        $invoice = $request->isError;

        $invoice->save();
    }

    function invoiceStatus(Request $request) {
        $request->validate(['txn_ref' => 'required|string']);
        $txnRef = $request->txn_ref;
        $merchantReference = env('SPARCO_PUBLIC_KEY');
        $reference = 'null';
        $invoice = Invoice::where('transactionReference', $txnRef)->first();
        if($invoice){
            $reference = $invoice->reference;
        }
        try {
            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
                 "pubKey" => env('SPARCO_PUBLIC_KEY')
            ])->get('https://live.sparco.io/gateway/api/v1/transaction/query?reference='.$reference.'&merchantReference='.$merchantReference);

            if ($response->status() === 200) {
                dd($response);
                return ['response'=> json_decode($response->body())];
                // return \back()->with(['response'=> json_decode($response)]);
                // return ['success'=>true,'message' => 'Your payment was successful'];
            }
        } catch(\Exception $e){
            return ['success'=>false,'error' => 'Something went wrong. Please try again later.' ];
        }
    }
}
