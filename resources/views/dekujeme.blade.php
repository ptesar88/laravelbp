@extends('layouts.default')

@extends('layouts.banner')

@section('page-content')
    <section class="free-post">
            <div class="max-w-6xl mx-auto mt-8 mb-8">
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
      <div class="flex items-center justify-center">
        <div>
            <div class="flex flex-col items-center space-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-700" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 class="text-4xl font-bold">Poptávka úspěšně odeslána!</h1>
                <p>Děkujeme Vám za odeslanou poptávku. Brzy Vás budeme kontaktovat!</p>
          
                    <a href="{{ route("uvod") }}" class="text-white mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" aria-current="page">Pokračovat na úvodní stranu</a>
             </div>
        </div>
    </div>
    </section>
@endsection