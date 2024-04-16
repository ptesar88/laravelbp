
@extends('layouts.default')

@section('page-banner')
<section class="free-post">
<div class="relative z-10 mx-auto max-full bg-gray-100 h-[400px]">
    <img class="z-0 flex mx-auto w-auto h-auto items-center mb-2" src="bannerV2.png"alt="Banner" />
    <img class="flex mx-auto max-w-sm items-center -mt-64" src="logo.PNG" alt="Logo" />
  </div>
</section>  
@endsection

@section('page-content')
    <section class="free-post">
        <div class="relative z-20 mx-auto max-w-5xl items-center p-2 mb-4 -mt-20 text-base text-green-800 rounded-lg bg-green-50 border border-green-700" role="alert">
            <span class="font-medium">Akce!</span> Při objednávce betonových plotů i s montáží akce 15%. Pouze na materiál 5%.
          </div>
          <div class="max-w-6xl mx-auto mt-16 mb-8">
            <div class="py-2 px-2 mx-auto max-w-6xl">
              <div class="mx-auto max-w-screen-sm text-center lg:mb-8 mb-8">
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-pink-950">Široký výběr designu a barev</h2>
                <p class="font-normal text-gray-600 sm:text-xl dark:text-gray-400">Nabízíme Vám více jak 30 druhu plotů různého dekoru či barvy, jednotlivé bloky lze mezi sebou libovolně kombinovat, finální počet kombinací, tak nelze plně určit, vše je pouze na vaší fantazii.</p>
              </div>
            </div>
        </div>
    </section>
@endsection

@section('page-all-products')

    <section class="free-post">
      <h2 class="mx-auto items-center text-center text-2xl mb-8 font-extrabold dark:text-white">Betonové ploty KLASIK</h2>
      <div class="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-3 md:gap-3">
      @foreach($products_plot as $prod)
                  <div key={{ $prod->id }}>
                    <figure class="flex h-52 flex-col rounded-md shadow-md bg-gray-50 border border-gray-300">
                     
                      <div class="h-6">
                      <h3 class="text-lg font-semibold items-center justify-center text-center text-gray-900 dark:text-white">{{ $prod->name }}
                       
                      </h3>
                      </div>
                      <div class="h-6 items-center justify-center text-center">
                      <span class="text-sm items-center justify-center text-center">{{ $prod->width }}x{{ $prod->height }}x{{ $prod->depth }}cm</span>
                      </div>
                      <div class="h-24">
                      <img class="mx-auto max-h-[85px]" src="{{ $prod->thumbnail_url }}" alt="" />
                      </div>
                      <div class="h-16 text-right bg-gray-200 right-0">
                      @if ($prod->top == 'Ano')
                        <span class="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          <span class="w-2 h-2 me-1 bg-blue-500 rounded-full"></span>
                          TOP
                        </span>
                      @endif
                      
                      @if ($prod->label == 'Ano')
                        <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                          <span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                          OTISK
                        </span>
                      @endif
                        <span class="text-sm font-semibold ml-2">cena od: {{ $prod->price }} Kč</span>
                        <button onclick="window.location='{{ url("/product/{$prod->id}") }}'" class="text-center text-sm m-2 p-2 mt-4 shadow-md rounded-md text-white bg-pink-950 border border-pink-950">Konfigurátor</button>
                        
                      </div>
                    </figure>
                  </div>    
          @endforeach
        </div>   
    </section>
    <section class="free-post">
      <h2 class="mx-auto items-center text-center text-2xl mb-8 font-extrabold dark:text-white">Betonové sloupky</h2>
      <div class="mx-auto items-center max-w-6xl md:mb-8">

<div class="relative overflow-x-auto">
  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
           
        </th>
          @foreach($products_sloupek_cat_types as $typ)
            <th scope="col" colspan="2" class="px-6 py-3 items-center text-center">
             {{ App\Models\CategoryType::getNameById($typ) }}
            </th>
            @endforeach
        </tr>
          <tr>
            <th scope="col" class="px-6 py-3">
              Výška (cm)
          </th>
              <th scope="col" class="px-6 py-3">
                  Váha (kg)
              </th>
              <th scope="col" class="px-6 py-3">
                  Cena (bez DPH)
              </th>
            <th scope="col" class="px-6 py-3">
                Váha (kg)
            </th>
            <th scope="col" class="px-6 py-3">
                Cena (bez DPH)
            </th>
            <th scope="col" class="px-6 py-3">
              Váha (kg)
          </th>
          <th scope="col" class="px-6 py-3">
              Cena (bez DPH)
          </th>
          </tr>
      </thead>
      <tbody>

        @foreach($products_sloupek_hladke as $vyska => $skupiny)
          <div>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th class="px-6 py-4">
                {{ $vyska }}
              </th>
              @foreach($products_sloupek_cat_types as $typ)
                @php($sloup = $skupiny[$typ] ?? null)
          
              <td class="px-6 py-4">
                {{ $sloup ? $sloup->weight : "-" }}
              </td>
              <td class="px-6 py-4">
                {{ $sloup ? $sloup->price : "-" }}
              </td>
              @endforeach
          </tr>
        </div>    
        @endforeach
      </tbody>
  </table>
</div>

<div class="relative overflow-x-auto mt-8">
  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Výška (cm)
          </th>
              <th scope="col" class="px-6 py-3">
                  Váha (kg)
              </th>
              <th scope="col" class="px-6 py-3">
                  Cena (bez DPH)
              </th>
            <th scope="col" class="px-6 py-3">
                Váha (kg)
            </th>
            <th scope="col" class="px-6 py-3">
                Cena (bez DPH)
            </th>
          </tr>
      </thead>
      <tbody>
        
        @foreach($products_sloupek_cihlicka as $vyska => $skupiny)
          <div>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th class="px-6 py-4">
                {{ $vyska }}
              </th>
          @foreach($skupiny as $type => $sloup)
          
              <td class="px-6 py-4">
                {{ $sloup->weight }}
              </td>
              <td class="px-6 py-4">
                {{ $sloup->price }}
              </td>
              @endforeach
          </tr>
        </div>    
        @endforeach
      </tbody>
  </table>
</div>
<div class="relative overflow-x-auto mt-8">
  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Výška (cm)
          </th>
              <th scope="col" class="px-6 py-3">
                  Váha (kg)
              </th>
              <th scope="col" class="px-6 py-3">
                  Cena (bez DPH)
              </th>
            <th scope="col" class="px-6 py-3">
                Váha (kg)
            </th>
            <th scope="col" class="px-6 py-3">
                Cena (bez DPH)
            </th>
          </tr>
      </thead>
      <tbody>

        @foreach($products_sloupek_stip_kamen as $vyska => $skupiny)
          <div>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th class="px-6 py-4">
                {{ $vyska }}
              </th>
          @foreach($skupiny as $type => $sloup)
          
              <td class="px-6 py-4">
                {{ $sloup->weight }}
              </td>
              <td class="px-6 py-4">
                {{ $sloup->price }}
              </td>
              @endforeach
          </tr>
        </div>    
        @endforeach
      </tbody>
  </table>
</div>
        </div>
    </section>
    <section class="free-post">
      <h2 class="mx-auto items-center text-center text-2xl mb-8 font-extrabold dark:text-white">Otisky na ploty KLASIK</h2>
      <div class="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-3 md:gap-3">
      @foreach($products_otisk as $otisk)
                  <div key={{ $otisk->id }}>
                    <figure class="flex h-52 flex-col rounded-md shadow-md bg-gray-50 border border-gray-300">
                     
                      <div class="h-6">
                      <h3 class="text-lg font-semibold items-center justify-center text-center text-gray-900 dark:text-white">{{ $otisk->name }}
                       
                      </h3>
                      </div>
                      <div class="h-6 items-center justify-center text-center">
                      <span class="text-sm items-center justify-center text-center">{{ $otisk->width }}x{{ $otisk->height }}x{{ $otisk->depth }}cm</span>
                      </div>
                      <div class="h-24">
                      <img class="mx-auto max-h-[85px]" src="{{ $otisk->thumbnail_url }}" alt="" />
                      </div>
                      <div class="h-16 text-right bg-gray-200 right-0">
                      @if ($otisk->top == 'Ano')
                        <span class="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          <span class="w-2 h-2 me-1 bg-blue-500 rounded-full"></span>
                          TOP
                        </span>
                      @endif
                      
                      @if ($otisk->label == 'Ano')
                        <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                          <span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                          OTISK
                        </span>
                      @endif
                        <span class="text-sm font-semibold ml-2">cena od: {{ $otisk->price }} Kč</span>
                        <button onclick="window.location='{{ url("/product/{$prod->id}") }}'" class="text-center text-sm m-2 p-2 mt-4 shadow-md rounded-md text-white bg-pink-950 border border-pink-950">Konfigurátor</button>
                        
                      </div>
                    </figure>
                  </div>    
          @endforeach
        </div>   
    </section>
@endsection