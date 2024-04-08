<?php

use App\Models\Product;
use App\Models\Advantage;
use App\Models\Specification;
use App\Models\Assembly;
//use App\Http\Controllers\KonfiguratorController;
use Illuminate\Support\Facades\Route;

// list
Route::any('/api/products', function () {
    header("Access-Control-Expose-Headers: Content-Range");
    header("Content-Range: " . Product::count());

    return Product::orderBy('id', 'desc')->get();
});

// get
Route::get('/api/products/{id}', function ($id) {
    return Product::find($id);
});

// delete
Route::delete('/api/products/{id}', function ($id) {
    return Product::find($id)->delete();
});

// update
Route::post('/api/products/{id}', function ($id) {
    $request = request();

    $product = Product::find($id);
    foreach($request->all() as $key => $value) {
        if ($value) {
            $product->$key = $value;
        }
    }
    $product->save();

    if ($request->file('thumbnail')) {
        $request->file('thumbnail')->move(public_path('attachments'), $product->thumbnail);
    }

    return Product::find($id);
});

// create
Route::post('/api/products', function () {
    $request = request();
    
    $product = Product::create($request->all());
    $product->thumbnail = $product->id . '-thumbnail.jpg';
    $product->save();

    if ($request->file('thumbnail')) {
        $request->file('thumbnail')->move(public_path('attachments'), $product->thumbnail);
    }

    return $product;
});

// list
Route::any('/api/advantages', function () {
    header("Access-Control-Expose-Headers: Content-Range");
    header("Content-Range: " . Advantage::count());

    return Advantage::all();
});


// get
Route::get('/api/advantages/{id}', function ($id) {
    return Advantage::find($id);
});

// delete
Route::delete('/api/advantages/{id}', function ($id) {
    return Advantage::find($id)->delete();
});

// update
Route::post('/api/advantages/{id}', function ($id) {
    $request = request();

    $advantage = Advantage::find($id);
    $advantage->update($request->all());
    $advantage->save();

    return Advantage::find($id);
});

// create
Route::post('/api/advantages', function () {
    $request = request();
    
    $advantage = Advantage::create($request->all());
    $advantage->thumbnail = $advantage->id . '-thumbnail.jpg';
    $advantage->save();

    $request->file('thumbnail')->move(public_path('attachments'), $advantage->thumbnail);

    return $advantage;
});

// list
Route::any('/api/specifications', function () {
    header("Access-Control-Expose-Headers: Content-Range");
    header("Content-Range: " . Specification::count());

    return Specification::all();
});

// get
Route::get('/api/specifications/{id}', function ($id) {
    return Specification::find($id);
});

// update
Route::post('/api/specifications/{id}', function ($id) {
    $request = request();

    $specification = Specification::find($id);
    $specification->update($request->all());
    $specification->save();

    return Specification::find($id);
});

//list 
Route::any('/api/assemblies', function () {
    header("Access-Control-Expose-Headers: Content-Range");
    header("Content-Range: " . Assembly::count());

    return Assembly::all();
});

// get
Route::get('/api/assemblies/{id}', function ($id) {
    return Assembly::find($id);
});

// update
Route::post('/api/assemblies/{id}', function ($id) {
    $request = request();

    $assembly = Assembly::find($id);
    $assembly->update($request->all());
    $assembly->save();

    return Assembly::find($id);
});

Route::get('/', function () {
    $products = Product::where('top', 'Ano')->take(6)->get();
    $advantages = Advantage::all();
    return view('index', compact('products'), compact('advantages'));
});

Route::get('kompletni-nabidka-plotu', function () {
    $products_plot = Product::where('type', 'plot')->get();
    $products_sloupek = Product::where('type', 'sloupek')->get();
    $products_otisk = Product::where('type', 'otisk')->get();

    return view('ploty', compact('products_plot','products_sloupek','products_otisk'));
});

Route::get('/product/{id}', function ($id) {
    $products_detail = Product::find($id);
    return view('konfigurator', compact('products_detail'));
});

Route::get('specifikace', function () {
    $specifications = Specification::all();
    return view('spec', compact('specifications'));
});

Route::get('montaz', function () {
    $assemblies = Assembly::all();
    return view('montaz', compact('assemblies'));
});

Route::get('kontakt', function () {
    return view('kontakt');
});



//Route::get('/konfigurator', [KonfiguratorController::class, 'index']);
//Route::post('confirm','App\Http\Controllers\KonfiguratorController@pressed');