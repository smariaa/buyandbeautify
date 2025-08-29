<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderItemController extends Controller
{
    public function index()
    {
        return response()->json(OrderItem::with(['order', 'product'])->get());
    }

    public function show($id)
    {
        $orderItem = OrderItem::with(['order', 'product'])->findOrFail($id);
        return response()->json($orderItem);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'order_id' => 'required|exists:orders,id',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $orderItem = OrderItem::create($validated);
        return response()->json($orderItem, 201);
    }
}
