<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use Illuminate\Http\Request;

class CartItemController extends Controller
{
    public function index()
    {
        return response()->json(CartItem::with(['cart', 'product'])->get());
    }

    public function show($id)
    {
        $cartItem = CartItem::with(['cart', 'product'])->findOrFail($id);
        return response()->json($cartItem);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'cart_id' => 'required|exists:carts,id',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $cartItem = CartItem::create($validated);
        return response()->json($cartItem, 201);
    }
}
