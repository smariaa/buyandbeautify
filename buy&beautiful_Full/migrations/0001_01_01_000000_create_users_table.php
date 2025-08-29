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
        // Create the users table
        Schema::create('users', function (Blueprint $table) {
            $table->id(); // Primary key for UserID
            $table->string('name'); // User's name
            $table->string('email')->unique(); // User's email with a unique constraint
            $table->string('password'); // User's password
            $table->string('address')->nullable(); // User's address, nullable
            $table->string('phone')->nullable(); // User's phone number, nullable
            $table->timestamps(); // Created_at and updated_at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Drop the users table if it exists
        Schema::dropIfExists('users');
    }
};
