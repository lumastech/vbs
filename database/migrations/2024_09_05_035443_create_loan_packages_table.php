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
        Schema::create('loan_packages', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->decimal('rate', 8,2);
            $table->decimal('amount', 8,2);
            $table->integer('duration');
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loan_packages');
    }
};
