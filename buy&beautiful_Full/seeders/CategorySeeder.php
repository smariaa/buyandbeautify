<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

public function run()
{
    DB::table('categories')->insert([
        ['name' => 'Lipsticks'],
        ['name' => 'Foundations'],
        ['name' => 'Mascara'],
       
    ]);
}