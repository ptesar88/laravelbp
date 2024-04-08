
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

@section('page-specifications')

    <section class="free-post">
      <h2 class="mx-auto items-center text-center text-2xl mb-2 max-w-4xl md:mb-8 font-extrabold dark:text-white">Montáž</h2>
      @foreach($assemblies as $assembly)
                  <div key={{ $assembly->id }}>
                      <div class="mx-auto items-center mb-2 max-w-6xl">
                        <h3 class="text-base">{!! $assembly->body !!}</h3>
                      </div>
                    </div>    
          @endforeach
        
    </section>
@endsection