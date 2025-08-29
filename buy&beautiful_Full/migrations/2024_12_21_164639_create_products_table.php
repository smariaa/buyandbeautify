<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id(); // Primary key for ProductID
            $table->string('product_name'); // Product name
            $table->decimal('price', 10, 2); // Product price
            $table->text('description')->nullable(); // Product description, nullable
            $table->string('image_url')->nullable(); // Image URL, nullable
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade'); // Foreign key to categories
            $table->timestamps(); // Created_at and updated_at timestamps
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};

