@extends('layouts.default')

@extends('layouts.banner')

@section('page-content')
    <section class="free-post">
        
          <div class="max-w-6xl mx-auto mt-8 mb-8">
            <div class="py-2 px-2 mx-auto max-w-6xl">
              <div class="mx-auto max-w-screen-sm text-center lg:mb-8 mb-8">
                <h1 class="hidden mx-auto items-center text-center text-2xl mb-8 font-extrabold">Betonové ploty Jaroslav Cipra</h1>
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-pink-950">Široký výběr designu a barev</h2>
                <p class="font-normal text-gray-600 sm:text-xl">Nabízíme Vám více jak 30 druhu plotů různého dekoru či barvy, jednotlivé bloky lze mezi sebou libovolně kombinovat, finální počet kombinací, tak nelze plně určit, vše je pouze na vaší fantazii.</p>
              </div>
            </div>
        </div>
    </section>
@endsection

@section('page-main-products')

<section class="free-post">
  <h2 class="mx-auto items-center text-center text-2xl mb-8 font-extrabold">Nejprodávanější</h2>
  <div class="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-3 md:gap-3">
  @foreach($products as $prod)
              <div key={{ $prod->id }}>
                <figure class="flex h-52 flex-col rounded-md shadow-md bg-gray-50 border border-gray-300">
                 
                  <div class="h-6">
                  <h3 class="text-lg font-semibold items-center justify-center text-center text-gray-900">{{ $prod->name }}
                   
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
                    <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
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
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-6xl items-center">
        <button onclick="window.location='{{ url("kompletni-nabidka-plotu") }}'" class="text-center items-center mx-auto text-sm font-semibold p-4 shadow-md rounded-md text-white bg-pink-950 border border-pink-950">Kompletní nabídka plotů</button>
      </div>
    </div> 
</section>

@endsection

@section('page-owner')
    <section class="free-post">
        <figure class="max-w-6xl mx-auto text-center py-8">
            <svg class="w-6 h-6 mx-auto text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p class="text-xl italic font-medium text-pink-950">
                "Oslovte nás Vaši poptávkou, budete mile překvapeni naší nabídkou!"</p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 mb-6 space-x-3 rtl:space-x-reverse">
              <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
              <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500">
                <cite class="pe-3 font-medium text-gray-900">Jaroslav Cipra</cite>
                <cite class="ps-3 text-sm text-gray-500">Jednatel</cite>
              </div>
            </figcaption>
          </figure>
    </section>
@endsection

@section('page-gallery')
    <section class="free-post">
<div class="max-w-6xl mx-auto text-center mb-8  grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="md:m-0 m-2">
      <img class="h-auto max-w-full rounded-lg" src="1.png" alt="">
  </div>
  <div class="md:m-0 m-2">
      <img class="h-auto max-w-full rounded-lg" src="2.png" alt="">
  </div>
  <div class="md:m-0 m-2">
      <img class="h-auto max-w-full rounded-lg" src="3.png" alt="">
  </div>

  
</div>
</section>
@endsection

@section('page-benefits')
    <section class="free-post">
            <div class="mx-auto max-w-6xl">
  
              <div class="grid gap-3 lg:grid-cols-2">
                @foreach($advantages as $adv)
                 <article class="md:p-6 p-2 bg-white rounded-lg md:m-0 m-2 border border-gray-200 shadow-md" key={keyF.id}>
                  <div class="flex justify-between items-center mb-5 text-gray-500">
                    <span class="bg-primary-100 text-primary-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                      {!! $adv->icon !!}
                      &nbsp;
                        {{ strtoupper($adv->title) }}
                    </span>
                    <span class="text-sm text-blue-700 shadow font-semibold">{{ strtoupper($adv->motto) }}</span>
                  </div>
                  <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ $adv->name }}</h2>
                  <p class="mb-5 font-normal text-pink-950">{!! $adv->body !!}</p>
                  <div class="flex justify-between items-center">
                  </div>
                </article>
                @endforeach
                </div>
            </div>
    </section>
@endsection


