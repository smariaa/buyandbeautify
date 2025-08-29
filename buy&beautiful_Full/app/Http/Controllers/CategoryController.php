<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return response()->json(Category::with('products')->get());
    }

    public function show($id)
    {
        $category = Category::with('products')->findOrFail($id);
        return response()->json($category);
    }

    public function store(Request $request)
    {
        $validated = $request->validate(['name' => 'required|string|max:255']);
        $category = Category::create($validated);
        return response()->json($category, 201);
    }
}
