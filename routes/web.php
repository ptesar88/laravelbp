<?php

use App\Models\Product;
use App\Models\ProductType;
use App\Models\Advantage;
use App\Models\Specification;
use App\Models\Assembly;
use App\Models\Type;
use App\Models\Category;
use App\Models\CategoryType;
use App\Models\Demand;
use App\Models\Color;
use App\Http\Controllers\FormController;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;


// list
Route::any('/api/demands', function () {
    header("Access-Control-Expose-Headers: Content-Range");
    header("Content-Range: " . Demand::count());

    return Demand::all();
});

// get
Route::get('/api/demands/{id}', function ($id) {
    return Demand::find($id);
});

// delete
Route::delete('/api/demands/{id}', function ($id) {
    return Demand::find($id)->delete();
});

// update
Route::post('/api/demands/{id}', function ($id) {
    $request = request();

    $demand = Demand::find($id);
    $demand->update($request->all());
    $demand->save();

    return Demand::find($id);
});

// create
Route::post('/api/demands', function () {
    $request = request();
    
    $demand = Demand::create($request->all());
    $demand->save();

    return $demand;
});

// list
Route::any('/api/product_types', function () {
    header("Access-Control-Expose-Headers: Content-Range");
    header("Content-Range: " . ProductType::count());

    return ProductType::all();
});

// get
Route::get('/api/product_types/{id}', function ($id) {
    return ProductType::find($id);
});

// delete
Route::delete('/api/product_types/{id}', function ($id) {
    return ProductType::find($id)->delete();
});

// update
Route::post('/api/product_types/{id}', function ($id) {
    $request = request();

    $product_type = ProductType::find($id);
    $product_type->update($request->all());
    $product_type->save();

    return ProductType::find($id);
});

// create
Route::post('/api/product_types', function () {
    $request = request();
    
    $product_type = ProductType::create($request->all());
    $product_type->save();

    return $product_type;
});


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
    $products = Product::where('top', 'Ano')->take(6)->orderBy('id','desc')->get();
    $advantages = Advantage::all();
    return view('index', compact('products'), compact('advantages'));
})->name("index");

Route::get('kompletni-nabidka-plotu', function () {
    $products_plot_klasik = Product::where('type', Type::TYPE_PLOT)->where('product_type', ProductType::TYPE_KLASIK)->get();
    $products_plot_premium = Product::where('type', Type::TYPE_PLOT)->where('product_type', ProductType::TYPE_PREMIUM)->get();
    $products_plot = Product::where('type', Type::TYPE_PLOT)->get();
    $products_sloupek = Product::where('type', Type::TYPE_SLOUPEK)->get();
    $products_otisk = Product::where('type', Type::TYPE_OTISK)->get();

    $products_sloupek_cat_types = [
        CategoryType::TYPE_PRUBEZNY,
        CategoryType::TYPE_KONCOVY,
        CategoryType::TYPE_ROHOVY,
    ];

    $products_types = [
        ProductType::TYPE_KLASIK,
        ProductType::TYPE_PREMIUM,
    ];

    $products_sloupek_cat_types_others = [
        CategoryType::TYPE_PRUBEZNY,
        CategoryType::TYPE_KONCOVY_LEVY_PRAVY,
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
        'products_plot_klasik',
        'products_plot_premium',
        'products_plot',
        'products_sloupek_cat_types',
        'products_sloupek_cat_types_others',
        'products_sloupek_hladke',
        'products_sloupek_cihlicka',
        'products_sloupek_stip_kamen',
        'products_otisk'));
})->name("kompletni-nabidka-plotu");

Route::get('/product/{id}', function ($id) {
    $showDivField = false;
    $products_detail = Product::find($id);
    $products_types = Product::where('product_type', ProductType::TYPE_PREMIUM)->get();
    $products_sloupek_premium = Category::where('type', 1)->get();// 1 = premium vyresit dynamicky Todo Petr
    $products_sloupek_klasik = Category::where('type', 2)->get();// 2 = klasik vyresit dynamicky Todo Petr
    $products_sloupek = Category::all();
    $products_otisk = Product::where('type', Type::TYPE_OTISK)->get();
    $products_sloupek_type_selected = Product::where('category', Type::TYPE_SLOUPEK)->get();
    $products = Product::all();
    $colors = Color::all();
    return view('konfigurator', compact("id", 'products_detail', 'products_types', 'products_sloupek_premium', 'products_sloupek_klasik', 'products_sloupek', 'products_otisk', 'products_sloupek_type_selected','showDivField', 'products', 'colors'));
})->name("product");

Route::post('/product/{id}', function ($id) {
    $request = request();
    $data = $request->all();
    //var_dump($data);

    $otisk = array_key_exists('otisk_id', $data) ? Product::find($data["otisk_id"]) : null;
    $barva = array_key_exists('barva_id', $data) ? Color::find($data["barva_id"]) : null;

    $sloupek = Category::find($data["sloupek_id"]);
    $produkt = Product::find($id);
  
    $body = view('body', [
        "data" => $data,
        "sloupek" => $sloupek,
        "produkt" => $produkt,
        "otisk" => $otisk,
        "barva" => $barva,
    ])->render();

    $demand = Demand::create([
        "firstname" => $data["firstname"],
        "lastname" => $data["lastname"],
        "email" => $data["email"],
        "phone" => $data["phone"],
        "company" => $data["company"],
        "notes" => $data["notes"],
        "montaz" => $data["montazq"],
        "doprava" => $data["dopravaq"],
        "localisation" => $data["localisation"],
        "body" => $body,
    ]);

    if ($demand['company'] == null) {
        $demand['company'] = "";
    }else{
        $demand['company'] = " / ".$demand['company'];
    }

    Mail::send([], [], function ($message) use ($demand) {
        $message
            ->to('info@pcservispt.cz')
            ->cc($demand['email'])
            ->subject('Nová poptávka - '.$demand['firstname'].' '.$demand['lastname'].' '.$demand['company'] )
            ->html($demand->body);
    });

    return redirect()->route("dekujeme");
})->name("product.save");

Route::get('dekujeme', function () {
    return view('dekujeme');
})->name("dekujeme");

//Route::get('/radio-form', [FormController::class, 'index'])->name('radioForm');
//Route::post('/process-form', [FormController::class, 'processForm'])->name('processForm');

Route::get('specifikace', function () {
    $specifications = Specification::all();
    return view('spec', compact('specifications'));
})->name("specifikace");

Route::get('montaz', function () {
    $assemblies = Assembly::all();
    return view('montaz', compact('assemblies'));
})->name("montaz");

Route::get('kontakt', function () {
    return view('kontakt');
})->name("kontakt");

Route::get('uvod', function () {
    $products = Product::where('top', 'Ano')->take(6)->orderBy('id','desc')->get();
    $advantages = Advantage::all();
    return view('index', compact('products'), compact('advantages'));
})->name("uvod");

Route::get('sitemap.xml', function () {
    $products = Product::all();

    return response()->view('sitemap', compact('products'))->header('Content-Type', 'text/xml');
})->name("sitemap");


//Route::get('/konfigurator', [KonfiguratorController::class, 'index']);
//Route::post('confirm','App\Http\Controllers\KonfiguratorController@pressed');