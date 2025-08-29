<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index()
    {
        return response()->json(Cart::with(['user', 'cartItems'])->get());
    }

    public function show($id)
    {
        $cart = Cart::with(['user', 'cartItems'])->findOrFail($id);
        return response()->json($cart);
    }

    public function store(Request $request)
    {
        $validated = $request->validate(['user_id' => 'required|exists:users,id']);
        $cart = Cart::create($validated);
        return response()->json($cart, 201);
    }
}
