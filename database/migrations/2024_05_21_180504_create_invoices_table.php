<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('plan_id');
            $table->string("transactionName");
            $table->double("amount");
            $table->string("currency", 20)->default("ZMW");
            $table->string("transactionReference");
            $table->string("customerFirstName", 50);
            $table->string("customerLastName", 50);
            $table->string("customerEmail", 191);
            $table->string("customerPhone", 20);
            $table->string("customerAddr")->nullable();
            $table->string("customerCity", 50)->nullable();
            $table->string("customerState", 50)->nullable();
            $table->string("customerCountryCode", 10)->default("ZM");
            $table->string("customerPostalCode", 20)->nullable();
            $table->string("merchantPublicKey")->nullable();
            $table->string("webhookUrl")->nullable();
            $table->string("payment_link")->nullable();
            $table->string("autoReturn")->nullable();
            $table->string("status", 10)->default("0");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
