@extends('layouts.default')

@extends('layouts.banner')

@section('page-content')
    <section class="free-post">
          <div class="max-w-6xl mx-auto mt-8 mb-8">
            <div class="py-2 px-2 mx-auto max-w-6xl">
              <div class="mx-auto max-w-screen-sm text-center lg:mb-8 mb-8">
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-pink-950">Krása, která vydrží věčnost </h2>
                <p class="font-normal text-gray-600 sm:text-xl dark:text-gray-400">Betonové záhony v sobě spojují moderní design s výjimečnou odolností.
                  Zkrášlete svou zahradu prvky, které vydrží i nejnáročnější podmínky.</p>
              </div>
            </div>
        </div>
    </section>
@endsection

@section('page-all-products')

    <section class="free-post">
      <h2 class="mx-auto items-center text-center text-2xl mb-8 font-extrabold dark:text-white">Betonové záhony</h2>
      <div class="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-3 md:gap-3">
      @foreach($products_zahon as $prod)
                  <div key={{ $prod->id }}>
                    <figure class="flex h-68 flex-col rounded-md shadow-md bg-white border border-gray-300 mb-4">
                     
                      <div class="h-6">
                      <h3 class="text-lg font-semibold items-center justify-center text-center text-gray-900 dark:text-white">{{ $prod->name }}
                       
                      </h3>
                      </div>
                      <div class="h-6 items-center justify-center text-center">
                        <span class="text-sm items-center justify-center text-center font-semibold">výška: {{ $prod->height }}cm</span>
                        <span class="text-sm items-center justify-center text-center font-semibold">dekor: {{ $prod->category_bed }}</span>
                      </div>
                      <div class="h-36">
                      <img class="mx-auto h-32" src="{{ $prod->thumbnail_url }}" alt="" />
                      </div>
                      <div class="flex h-10 text-left right-0 items-center">
                        <span class="flex text-sm ml-2">Barevné provedení:</span>
                        <div class="flex ml-2 h-8 w-8 bg-gray-300" title="Šedá"></div>
                        <div class="flex ml-2 h-8 w-8 bg-orange-200" title="Pískovec"></div>
                        <div class="flex ml-2 h-8 w-8 bg-amber-800" title="Hnědá"></div>                                   
                        <div class="flex ml-2 h-8 w-8 bg-gray-600" title="Grafit"></div> 
                      </div>
                      <div class="h-16 text-right bg-gray-200 right-0">
                      @if ($prod->top == 'Ano')
                        <span class="items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          <span class="w-2 h-2 me-1 bg-blue-500 rounded-full"></span>
                          TOP
                        </span>
                      @endif
                      
                      @if ($prod->label == 'Ano')
                        <span class="items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                          <span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                          OTISK
                        </span>
                      @endif
                        <span class="text-sm font-semibold ml-2">cena od: {{ $prod->price }} Kč</span>
                        <button onclick="window.location='{{ url("/product-bed/{$prod->id}") }}'" class="text-center text-sm m-2 p-2 mt-4 shadow-md rounded-md text-white bg-pink-950 border border-pink-950">Konfigurátor</button>
                      </div>
                    </figure>
                  </div>    
          @endforeach
        </div>   
    </section>
@endsection