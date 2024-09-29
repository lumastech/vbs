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
        Schema::create('savings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('loan_package_id');
            $table->decimal('amount', 8,2);
            $table->decimal('rate', 8,2);
            $table->string('term')->default('1');
            $table->string('purpose')->nullable();
            $table->string('notes')->nullable();
            $table->string('status')->default('pending');
            $table->foreignId('approved_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('savings');
    }
};
