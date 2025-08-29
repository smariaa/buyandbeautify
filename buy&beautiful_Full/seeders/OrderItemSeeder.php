<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

public function run()
{
    DB::table('order_items')->insert([
        ['order_id' => 1, 'product_id' => 1, 'quantity' => 2, 'price' => 10.99],
        ['order_id' => 2, 'product_id' => 2, 'quantity' => 1, 'price' => 20.50],
    ]);
}
