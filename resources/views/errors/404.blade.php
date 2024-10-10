
@extends('layouts.default')

@extends('layouts.banner')

@section('page-content')
<section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6" style="height: 380px">
        <div class="mx-auto max-w-screen-sm text-center">
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Něco se nepovedlo!</p>
            <p class="mb-4 text-lg font-light text-gray-50">Omlouváme se, ale požadovanou stránku nemůžeme načíst. Prosím pokračujte na úvodní stránku.</p>
            <a href="{{ route("uvod") }}" class="text-white mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" aria-current="page">Pokračovat na úvodní stranu</a>
        </div>   
    </div>
</section>
@endsection