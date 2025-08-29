<?php
use Illuminate\Support\Facades\DB;

public function run()
{
    DB::table('users')->insert([
        ['name' => 'John Doe', 'email' => 'john@example.com', 'password' => bcrypt('password')],
        ['name' => 'Jane Doe', 'email' => 'jane@example.com', 'password' => bcrypt('password')],
    ]);
}
