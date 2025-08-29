<?php


namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
  /**
     * Show a list of all of the application's users.
     */
    public function index(): View
    {
        $users = DB::select('select * from users where active = ?', [1]);
 
        return view('user.index', ['users' => $users]);
    }

  /*// Fetch all products
    public function index()
    {
        // Return all products as a JSON response
        return response()->json(Product::all());
    }*/

    // Store a new product
    public function store(Request $request)
    {
        
        
              DB::table('products')->insert([
                'name' => $request->input('name'),
                'price' => $request->input('price'),
                'description' => $request->input('description'),
                'image_url' => $request->input('image_url'),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
    
            return response()->json(['message' => 'Product added successfully!'], 201);

              // Validate the incoming request data
        /*$validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'image' => 'required|string', // Assuming the image is a URL or file path
        ]);

        // Create a new product in the database using the validated data
        $product = Product::create($validated);

        // Return the created product as a JSON response with a 201 status code
        return response()->json($product, 201);*/
        
    }
    public function getProducts()
    {
        // Fetch products from the database
        $products = Product::all();
        // Return the Makeup page with products data as props
        return Inertia::render('Beautify/Makeup', [
            'products' => $products,
        ]);
    }

    // Show a specific product
    public function show($id)
    {
        // Find the product by ID or return a 404 response if not found
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        return response()->json($product);
    }

    // Update a product
    public function update(Request $request, $id)
    {
        // Find the product by ID or return a 404 response if not found
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        // Validate the incoming request data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'image' => 'required|string', // Assuming the image is a URL or file path
        ]);

        // Update the product in the database
        $product->update($validated);

        // Return the updated product as a JSON response
        return response()->json($product);
    }

    // Delete a product
    public function destroy($id)
    {
        // Find the product by ID or return a 404 response if not found
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        // Delete the product from the database
        $product->delete();

        // Return a success response
        return response()->json(['message' => 'Product deleted successfully']);
    }
}
