<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

public function run()
{
    DB::table('orders')->insert([
        ['user_id' => 1, 'status' => 'pending', 'total_price' => 30.99],
        ['user_id' => 2, 'status' => 'completed', 'total_price' => 50.00],
    ]);
}
