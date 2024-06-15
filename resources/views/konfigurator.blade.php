
@extends('layouts.default')

@section('page-banner')
<section class="free-post">
<div class="relative z-10 mx-auto max-full bg-gray-100 h-[400px]">
    <img class="z-0 flex mx-auto w-auto h-auto items-center mb-2" src="../bannerV2.png"alt="Banner" />
    <img class="flex mx-auto max-w-sm items-center -mt-64" src="../logo.PNG" alt="Logo" />
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
      <h2 class="mx-auto items-center text-center text-2xl mb-2 max-w-4xl md:mb-8 font-extrabold dark:text-white">Konfigurátor</h2>
      <div class="relative z-20 mx-auto max-w-6xl items-center p-2 mb-8 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
        <span class="font-medium">1. Vybrali jste</span>
      </div>
      <div class="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-3 md:gap-3">
        <div>
      <h3 class="mx-auto items-center text-center font-bold dark:text-white">{{ $products_detail->name }}</h3>
        </div>
        <div>
          <img class="mx-auto items-center" src="{{ $products_detail->thumbnail_url }}" alt="" />
        </div>  
        <div>
          <div class="mx-auto items-center text-center font-bold dark:text-white">Rozměry: {{ $products_detail->width }}x{{ $products_detail->height }}x{{ $products_detail->depth }}cm</div>
          <div class="mx-auto items-center text-center font-bold dark:text-white">Cena: {{ $products_detail->price }} Kč</div>
        </div>  
      </div>
      @if($products_detail->label == 'Ano')
      <div class="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-1 md:gap-1"> 
        <div>
                <div class="flex">
                    <div class="flex items-center me-4 ms-2 font-bold">
                        Chcete použít otisk?
                    </div>
                  
                    
                        <div class="flex items-center me-4">
                            <input id="inline-radio" type="radio" value="ano" onChange={handleLabelChange} name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="inline-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ANO</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="inline-2-radio" type="radio" value="ne" onChange={handleLabelChange} name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="inline-2-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">NE</label>
                        </div>
                      
                 
                </div>
      
        </div>
      </div> 

      <div id="otiskKonfig" class="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-4 md:gap-3">
        @foreach($products_otisk as $otisk)
                    <div key={{ $otisk->id }}>
                        <figure class="flex h-48 flex-col rounded-md shadow-md bg-gray-50 border border-gray-300">
                        <div class="flex items-center ps-4 ">
                            <input id="bordered-radio-1" type="radio" value="{{ $otisk->id }}" onChange={handleTypeChange} name="radioSel" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                            <label for="bordered-radio-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $otisk->name }}</label>
                         </div>
                         <div class="h-24">
                        <img class="mx-auto max-h-[85px]" src="{{ $otisk->thumbnail_url }}" alt="" />
                        </div>
                        <div class="h-12 items-center justify-center text-center bg-gray-200 right-0">
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
                                                  
                        </div>
                      </figure>
                    </div>    
            @endforeach
          </div>  
          @endif  
     
         
      <div class="relative z-20 mx-auto max-w-6xl items-center mt-12 p-2 mb-2 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
        <span class="font-medium">2. Vyberte typ sloupku</span>
      </div>

      <div class="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-4 md:gap-3">
        @foreach($products_sloupek as $sloupek) 
      <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
        <input id="bordered-radio-1" type="radio" value="{{ $sloupek->id }}" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
        <label for="bordered-radio-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $sloupek->name }}</label>
    </div>
    @endforeach 
    </div>
      <div class="relative z-20 mx-auto max-w-6xl items-center mt-12 p-2 mb-2 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
        <span class="font-medium">3. Vyberte tvar plotu</span>
      </div> 
    
    
    <div id="root" class="mx-auto items-center mb-2 max-w-6xl"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />

    <script>
        let product = JSON.parse('{!! $products_detail->toJSON() !!}');
        let otisk = JSON.parse('{!! $products_otisk->toJSON() !!}');
        let width = {{ $products_detail-> width }};
        let heightValue = {{ $products_detail-> height }};
        let priceValue = {{ $products_detail-> price }};
        let postPriceValue = {{ $products_detail-> price }};
    </script>

    <script type="text/babel" src="{{ asset('src/components/SlopeType.component.tsx') }}"></script>
    <script type="text/babel" src="{{ asset('src/components/UserSelectedFence.component.tsx') }}"></script>
    <script type="text/babel" src="{{ asset('src/components/FenceType.component.tsx') }}"></script>
    <script type="text/babel" src="{{ asset('src/components/FenceI.component.tsx') }}"></script>
    <script type="text/babel" src="{{ asset('src/components/FenceL.component.tsx') }}"></script>
    <script type="text/babel" src="{{ asset('src/components/FenceU.component.tsx') }}"></script>
    <script type="text/babel" src="{{ asset('src/components/Demand.component.tsx') }}"></script>

    <script type="text/babel" src="{{ asset('fencecalc.js') }}"></script>

 
  
    </section>
    @endsection