@extends('layouts.default')

@extends('layouts.banner')

@section('title')
  {{ $products_detail->name }}
@endsection

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
    <form action="{{ route("product-bed.save", $id) }}" method="post" enctype="multipart/form-data">
      <div id="bed-root" class="mx-auto items-center mb-2 p-2 max-w-6xl"></div>
    </form>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />

    <script>


        let sloupky = JSON.parse('{!! $products_sloupek->toJSON() !!}');
        let sloupkyPremium = JSON.parse('{!! $products_sloupek_premium->toJSON() !!}');
        let sloupkyKlasik = JSON.parse('{!! $products_sloupek_klasik->toJSON() !!}');
        let sloupkySelected = JSON.parse('{!! $products_sloupek_type_selected->toJSON() !!}'); 
        let otisky = JSON.parse('{!! $products_otisk->toJSON() !!}');


        let produkty = JSON.parse('{!! $products->toJSON() !!}');
        let produkt = JSON.parse('{!! $products_detail->toJSON() !!}');
        let colors = JSON.parse('{!! $colors->toJSON() !!}');
        let beds = JSON.parse('{!! $beds->toJSON() !!}');
        
    </script>

    <script type="text/babel" src="{{ asset('src/components/BedRoot.component.tsx') }}"></script>
    <script type="text/babel" src="{{ asset('src/components/DemandBed.component.tsx') }}"></script>
    <script type="text/babel" src="{{ asset('src/components/Conditions.component.tsx') }}"></script>
    <script type="text/babel" src="{{ asset('src/components/TradeConditions.component.tsx') }}"></script>
    
    <script type="text/babel" src="{{ asset('bedcalc.js') }}"></script>
@endsection
