<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

DB::table('products')->insert([
    ['name' => 'Lipstick', 'price' => 10.99, 'category_id' => 1, 'stock' => 100],
    ['name' => 'Foundation', 'price' => 20.50, 'category_id' => 2, 'stock' => 50],
]);
