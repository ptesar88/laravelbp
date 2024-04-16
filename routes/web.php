<?php

use App\Models\Product;
use App\Models\Advantage;
use App\Models\Specification;
use App\Models\Assembly;
use App\Models\Type;
use App\Models\Category;
use App\Models\CategoryType;
use Illuminate\Support\Facades\Route;

// list
Route::any('/api/category_types', function () {
    header("Access-Control-Expose-Headers: Content-Range");
    header("Content-Range: " . CategoryType::count());

    return CategoryType::all();
});

// get
Route::get('/api/category_types/{id}', function ($id) {
    return CategoryType::find($id);
});

// delete
Route::delete('/api/category_types/{id}', function ($id) {
    return CategoryType::find($id)->delete();
});

// update
Route::post('/api/category_types/{id}', function ($id) {
    $request = request();

    $category_type = CategoryType::find($id);
    $category_type->update($request->all());
    $category_type->save();

    return CategoryType::find($id);
});

// create
Route::post('/api/category_types', function () {
    $request = request();
    
    $category_type = CategoryType::create($request->all());
    $category_type->save();

    return $category_type;
});

// list
Route::any('/api/categories', function () {
    header("Access-Control-Expose-Headers: Content-Range");
    header("Content-Range: " . Category::count());

    return Category::all();
});

// get
Route::get('/api/categories/{id}', function ($id) {
    return Category::find($id);
});

// delete
Route::delete('/api/categories/{id}', function ($id) {
    return Category::find($id)->delete();
});

// update
Route::post('/api/categories/{id}', function ($id) {
    $request = request();

    $category = Category::find($id);
    $category->update($request->all());
    $category->save();

    return Category::find($id);
});

// create
Route::post('/api/categories', function () {
    $request = request();
    
    $category = Category::create($request->all());
    $category->save();

    return $category;
});

// list
Route::any('/api/types', function () {
    header("Access-Control-Expose-Headers: Content-Range");
    header("Content-Range: " . Type::count());

    return Type::all();
});

// get
Route::get('/api/types/{id}', function ($id) {
    return Type::find($id);
});

// delete
Route::delete('/api/types/{id}', function ($id) {
    return Type::find($id)->delete();
});

// update
Route::post('/api/types/{id}', function ($id) {
    $request = request();

    $product = Type::find($id);
    foreach($request->all() as $key => $value) {
        if ($value) {
            $product->$key = $value;
        }
    }
    $product->save();

    $product = Type::find($id);
});

// create
Route::post('/api/types', function () {
    $request = request();
    
    $type = Type::create($request->all());
   
    $type->save();

    return $type;
});

// list

Route::any('/api/products', function () {

    
    header("Access-Control-Expose-Headers: Content-Range");
    header("Content-Range: " . Product::count());

    return Product::with('Type', 'Category', 'CategoryType')->orderBy('id', 'desc')->get();

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

    $product = Product::find($id);

    return $product;
    return Type::all();
    return Category::all();
});

// create
Route::post('/api/products', function () {
    $request = request();
    
    $product = Product::create($request->all());
    $product->thumbnail = null;
    
    if ($request->file('thumbnail')) {
        $product->thumbnail = $product->id . '-thumbnail.jpg';
        $request->file('thumbnail')->move(public_path('attachments'), $product->thumbnail);
    }

    $product->save();

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
    $products_plot = Product::where('type', Type::TYPE_PLOT)->get();
    $products_sloupek = Product::where('type', Type::TYPE_SLOUPEK)->get();
    $products_otisk = Product::where('type', Type::TYPE_OTISK)->get();

    $products_sloupek_cat_types = [
        CategoryType::TYPE_PRUBEZNY,
        CategoryType::TYPE_KONCOVY,
        CategoryType::TYPE_ROHOVY,
    ];

    $products_sloupek_hladke = Product
        ::where('type', 2)
        ->where('category', 1)
        ->get()
        ->groupBy('height')
        ->map(function ($products) {
            return $products->mapWithKeys(function ($product, $key) {
                $category_type = $product["category_type"];
                return [$category_type => $product];
            });
        })
        ->sortBy('height');
    
    $products_sloupek_cihlicka = Product
        ::where('type', 2)
        ->where('category', 2)
        ->get()
        ->groupBy('height')
        ->mapWithKeys(function ($products, $category_type) {
            return [$category_type => $products];
        })
        ->sortBy('height');    

    $products_sloupek_stip_kamen = Product
        ::where('type', 2)
        ->where('category', 3)
        ->get()
        ->groupBy('height')
        ->mapWithKeys(function ($products, $category_type) {
            return [$category_type => $products];
        })
        ->sortBy('height'); 

    return view('ploty', compact(
        'products_plot',
        'products_sloupek',
        'products_sloupek_cat_types',
        'products_sloupek_hladke',
        'products_sloupek_cihlicka',
        'products_sloupek_stip_kamen',
        'products_otisk'));
});

Route::get('/product/{id}', function ($id) {
    $products_detail = Product::find($id);
    $products_sloupek = Category::all();
    $products_otisk = Product::where('type', Type::TYPE_OTISK)->get();
    return view('konfigurator', compact('products_detail', 'products_sloupek', 'products_otisk'));
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