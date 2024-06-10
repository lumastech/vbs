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
        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            $table->string('name', 20);
            $table->decimal('price', 15, 2);

            $table->string('bedrooms', 4)->nullable();
            $table->string('bathrooms', 4)->nullable();
            $table->integer('levels')->nullable();

            $table->string('style', 50)->nullable();
            $table->string('roof_finish', 50)->nullable();

            $table->decimal('area', 15, 2)->nullable();

            $table->text('description')->nullable();

            $table->string('status', 20)->default('live');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plans');
    }
};
