<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

public function run()
{
    DB::table('carts')->insert([
        ['user_id' => 1],
        ['user_id' => 2],
    ]);
}
