<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Product;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Create a new product
Route::post('/products', function (Request $request) {
    $data = $request->validate([
        'trefle_id' => 'nullable|integer',
        'name' => 'required|string|max:255',
        'price' => 'required|integer|min:0',
        'image' => 'required|string|max:255',
        'description' => 'nullable|string',
        'origin' => 'nullable|string|max:255',
        'light' => 'nullable|string|max:255',
        'water' => 'nullable|string|max:255',
        'note' => 'nullable|string|max:255',
    ]);
    $product = Product::create($data);
    return response()->json($product, 201);
})->name('products.store');


//update a product
Route::put('/products/{id}', function (Request $request, $id) {
    $data = $request->validate([
        'trefle_id' => 'nullable|integer',
        'name' => 'required|string|max:255',
        'price' => 'required|integer|min:0',
        'image' => 'required|string|max:255',
        'description' => 'nullable|string',
        'origin' => 'nullable|string|max:255',
        'light' => 'nullable|string|max:255',
        'water' => 'nullable|string|max:255',
        'note' => 'nullable|string|max:255',
    ]);
    $product = Product::findOrFail($id);
    $product->update($data);
    return response()->json($product, 200);
})->name('products.update');
