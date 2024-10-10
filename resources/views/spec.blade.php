@extends('layouts.default')

@extends('layouts.banner')

@section('title')
  Specifikace
@endsection

@section('page-content')
    <section class="free-post">
    
          <div class="max-w-6xl mx-auto mt-8 mb-8">
            <div class="py-2 px-2 mx-auto max-w-6xl">
              <div class="mx-auto max-w-screen-sm text-center lg:mb-8 mb-8">
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-pink-950">Široký výběr designu a barev</h2>
                <p class="font-normal text-gray-600 sm:text-xl">Nabízíme Vám více jak 30 druhu plotů různého dekoru či barvy, jednotlivé bloky lze mezi sebou libovolně kombinovat, finální počet kombinací, tak nelze plně určit, vše je pouze na vaší fantazii.</p>
              </div>
            </div>
        </div>
    </section>
@endsection

@section('page-specifications')

    <section class="free-post">
      <h1 class="mx-auto items-center text-center text-2xl mb-2 max-w-4xl md:mb-8 font-extrabold">Specifikace</h1>
      @foreach($specifications as $spec)
                  <div key={{ $spec->id }}>
                      <div class="mx-auto items-center p-2 max-w-6xl">
                        <h3 class="text-base">{!! $spec->body !!}</h3>
                      </div>
                    </div>    
          @endforeach
    </section>
@endsection