
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
  <h2 class="mx-auto items-center text-center text-2xl mb-2 max-w-6xl md:mb-8 font-extrabold dark:text-white">Kontakt</h2>
  <div class="mx-auto grid mb-2 max-w-6xl md:mb-8 md:grid-cols-3 md:gap-3">
    <div>
      <figure class="flex flex-col h-32 rounded-md shadow-md p-2 bg-gray-50 border border-gray-300">
      <span class="text-md font-bold mb-1">Fakturační adresa</span>
      <span class="text-md font-normal mt-1">Jaroslav Cipra</span>
      <span class="text-md font-normal">Preislerovo nám. 150, Králův Dvůr 267 01</span>
      <span class="text-md font-normal">IČ: 74477447  DIČ: CZ8111180627</span>
      </figure>
    </div>
    <div>  
      <figure class="flex flex-col h-32 rounded-md shadow-md p-2 bg-gray-50 border border-gray-300">
      <span class="text-md font-bold mb-1">Telefonní kontakt</span>
      <span class="text-md font-normal mt-1">+420 606 415 330</span>
        <span class="text-md font-normal">+420 722 900 387</span>
      </figure>
    </div>
    <div>
      <figure class="flex flex-col h-32 rounded-md shadow-md p-2 bg-gray-50 border border-gray-300">
      <span class="text-md font-bold mb-1">Objednávky</span>
      <span class="text-md font-normal mt-1 text-blue-800">betonoveplotykraluvdvur@seznam.cz</span>
      </figure>
    </div>
  </div>   
  <div class="mx-auto items-center mb-2 max-w-6xl">
    <span class="text-md font-bold mb-1">Jak se k nám dostanete?</span><br>
    <span class="text-md font-normal mt-1 mb-1">Ulice Pod Skalkou Králův Dvůr - v moment kdy vás navigace bude návadět do této ulice odbočit do ní neodbočíte a odbočíte vlevo o cca 200m dál na prašnou cestu a my jsme dole v areálu.</span><br>
  </div>
  <div class="mx-auto items-center mb-2 max-w-6xl">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10271.376077247936!2d14.013601!3d49.939268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470baff96c467675%3A0x508e0c2313a39315!2zSmFyb3NsYXYgQ2lwcmEgLSBQcm9kZWogxaF0xJtya3UsIHDDrXNrdSwgb2tyYXNuw71jaCB2YWxvdW7Frywga2HEjcOtcmvFryBhIGRydMOtLg!5e0!3m2!1scs!2sus!4v1712260502062!5m2!1scs!2sus"
    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

</section>

@endsection