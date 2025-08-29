<?php
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    

});

// API route to fetch products
Route::get('/addproducts', [ProductController::class, 'store'])->name('addproducts');
// API route to fetch products
Route::get('/startproducts', [ProductController::class, 'index'])->name('startproducts');



Route::get('/beautify/makeup', [ProductController::class, 'getProducts']);

/*Route::get('/beautify/makeup', function () {
    return Inertia::render('Beautify/Makeup');
});*/


Route::get('/insertproduct', function () {
    DB::table('products')->insert([
        [
            'name' => 'Foundation',
            'price' => 500.00,
            'description' => 'Long-lasting matte foundation.',
            'image_url' => 'images/foundation.jpg',
            'created_at' => now(),
            'updated_at' => now(),
        ],
    ]);
    return 'Product inserted successfully!';
});


Route::get('/beautify/skincare', function () {
    return Inertia::render('Beautify/Skincare');
});

Route::get('/beautify/organictreatment', function () {
    return Inertia::render('Beautify/Organictreatment');
});

Route::get('/beautify/accessories', function () {
    return Inertia::render('Beautify/Accessories');
});

Route::get('/beautify/fentybeauty', function () {
    return Inertia::render('Beautify/Fentybeauty');
});

Route::get('/beautify/nars', function () {
    return Inertia::render('Beautify/Nars');
});

Route::get('/beautify/mac', function () {
    return Inertia::render('Beautify/Mac');
});

Route::get('/beautify/maybelline', function () {
    return Inertia::render('Beautify/Maybelline');
});

Route::get('/beautify/cart', function () {
    return Inertia::render('Beautify/Cart');
});

Route::get('/beautify/cart', function () {
    return Inertia::render('Beautify/Cart');
});

Route::get('/beautify/face', function () {
    return Inertia::render('Beautify/Face');
});

Route::get('/beautify/lips', function () {
    return Inertia::render('Beautify/Lips');
});

Route::get('/beautify/facialcare', function () {
    return Inertia::render('Beautify/Facialcare');
});

Route::get('/beautify/bodycare', function () {
    return Inertia::render('Beautify/Bodycare');
});

require __DIR__.'/auth.php';
