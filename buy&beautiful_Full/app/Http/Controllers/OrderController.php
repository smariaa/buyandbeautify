<?php
namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        return response()->json(Order::with(['user', 'orderItems'])->get());
    }

    public function show($id)
    {
        $order = Order::with(['user', 'orderItems'])->findOrFail($id);
        return response()->json($order);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'total_price' => 'required|numeric|min:0',
        ]);

        $order = Order::create($validated);
        return response()->json($order, 201);
    }
}
