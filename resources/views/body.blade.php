
<b>Dobrý den, děkujeme za Vaší poptávku a zasíláme celkový přehled poptávaného plotu.</b>
<p>
    <h3>Vaše údaje:</h3>
<ul style="list-style-type: square">
    <li>
        Firma: {{ $data['company'] }}
    </li>
    <li>
        Jméno příjmení: {{ $data['firstname']}} {{ $data['lastname'] }}
    </li>
    <li>
        Telefon: {{ $data['phone'] }}
    </li>
    <li>
        Email: {{ $data['email'] }}
    </li>
    <li>
        Místo realizace: {{ $data['localisation'] }}
    </li>
    <li>
        Poznámka: {{ $data['notes'] }}
    </li>
    <li>
        Montáž: {{ $data['montazq'] }}
    </li>
    <li>
        Doprava: {{ $data['dopravaq'] }}
    </li>
</ul>
</p>
@if ($data['tvarplotu'] == 'tvar-I')
<p>
    <h3>Detaily plotu:</h3>
<ul style="list-style-type: square">
    <li>
        Produkt: {{ $produkt->name }}
    </li>
    <li>
        Rozměry panelu: {{ $produkt->width }}x{{ $produkt->height }}x{{ $produkt->depth }} cm
    </li>
    <li>
        Cena/ks: {{ $produkt->price }} Kč
    </li>
    <li>
        Otisk: {{ $data['otiskq'] }}
    </li>
    <li>
        Typ otisku: {{ $otisk == null  ? "Není vybrán" : $otisk->name}}
    </li>
    <li>
        Překrytí barvou: {{ $data['barvaq'] }}
    </li>
    <li>
        Typ barvy: {{ $barva == null ? "Není vybrána" : $barva->name }}
    </li>
    <li>
        Typ sloupku: {{ $sloupek == null ? "Není vybrán" : $sloupek->name }}
    </li>
    <li>
        Tvar plotu: {{ $data['tvarplotu'] }}
    </li>
    <li>
        Rozměry plotu: {{ $data['fenceWidth']}}x{{ $data['fenceHeight'] }} m
    </li>
    <li>
        Délka plotu: {{ $data['fenceWidth']}} m
    </li>
    <li>
        Výška sloupku a plotu: {{ $data['fenceHeight'] }} m
    </li>
    <li>
        Počet sloupků: {{ $data['totalPostCount'] }} ks
    </li>
    <li>
        Počet panelů: {{ $data['panelCountTotalAll'] }} ks
    </li>
    <li>
        ----------------------------------------------------------
    </li>
    <li>
        Počet položek: {{ $data['itemCount']  }} ks
    </li>
    <li>
        Orientační cena celkem: {{ $data['totalPrice'] }} Kč
    </li>
</ul>
</p>
@elseif ($data['tvarplotu'] == 'tvar-L')
<p>
    <h3>Detaily plotu:</h3>
<ul style="list-style-type: square">
    <li>
        Produkt: {{ $produkt->name }}
    </li>
    <li>
        Rozměry panelu: {{ $produkt->width }}x{{ $produkt->height }}x{{ $produkt->depth }} cm
    </li>
    <li>
        Cena/ks: {{ $produkt->price }} Kč
    </li>
    <li>
        Otisk: {{ $data['otiskq'] }}
    </li>
    <li>
        Typ otisku: {{ $otisk == null  ? "Není vybrán" : $otisk->name}}
    </li>
    <li>
        Překrytí barvou: {{ $data['barvaq'] }}
    </li>
    <li>
        Typ barvy: {{ $barva == null ? "Není vybrána" : $barva->name }}
    </li>
    <li>
        Typ sloupku: {{ $sloupek == null ? "Není vybrán" : $sloupek->name }}
    </li>
    <li>
        Tvar plotu: {{ $data['tvarplotu'] }}
    </li>
    <li>
        <b>1. strana</b>
    </li>
    <li>
        Rozměry plotu: {{ $data['fenceWidth']}}x{{ $data['fenceHeight'] }} m
    </li>
    <li>
        Počet panelů: {{ $data['panelCountTotal'] }} ks
    </li>
    <li>
        Sloupků koncových: {{ $data['totalPostCountK'] }} ks
    </li>
    <li>
        Sloupků průběžných: {{ $data['postCountPA'] }} ks
    </li>
    <li>
        Délka plotu: {{ $data['fenceWidth']}} m
    </li>
    <li>
        Výška sloupku a plotu: {{ $data['fenceHeight'] }} m
    </li>
    <li>
        <b>2. strana</b>
    </li>
    <li>
        Rozměry plotu: {{ $data['fenceWidth2']}}x{{ $data['fenceHeight2'] }} m
    </li>
    <li>
        Počet panelů: {{ $data['panelCountTotal2'] }} ks
    </li>
    <li>
        Sloupků koncových: {{ $data['totalPostCountK2'] }} ks
    </li>
    <li>
        Sloupků průběžných: {{ $data['postCountP2A'] }} ks
    </li>
    <li>
        Délka plotu: {{ $data['fenceWidth2']}} m
    </li>
    <li>
        Výška sloupku a plotu: {{ $data['fenceHeight2'] }} m
    </li>
    <li>
        ----------------------------------------------------------
    </li>
    <li>
        Počet položek: {{ $data['itemCount']  }} ks
    </li>
    <li>
        Panelů celkem: {{ $data['panelCountTotalAll'] }} ks
    </li>
    <li>
        Sloupků celkem: {{ $data['totalPostCount'] }} ks, včetně 1 ks rohového
    </li>
    <li>
        Orientační cena celkem: {{ $data['totalPrice'] }} Kč
    </li>
</ul>
</p>
@elseif ($data['tvarplotu'] == 'tvar-U')
<p>
    <h3>Detaily plotu:</h3>
<ul style="list-style-type: square">
    <li>
        Produkt: {{ $produkt->name }}
    </li>
    <li>
        Rozměry panelu: {{ $produkt->width }}x{{ $produkt->height }}x{{ $produkt->depth }} cm
    </li>
    <li>
        Cena/ks: {{ $produkt->price }} Kč
    </li>
    <li>
        Otisk: {{ $data['otiskq'] }}
    </li>
    <li>
        Typ otisku: {{ $otisk == null  ? "Není vybrán" : $otisk->name}}
    </li>
    <li>
        Překrytí barvou: {{ $data['barvaq'] }}
    </li>
    <li>
        Typ barvy: {{ $barva == null ? "Není vybrána" : $barva->name }}
    </li>
    <li>
        Typ sloupku: {{ $sloupek == null ? "Není vybrán" : $sloupek->name }}
    </li>
    <li>
        Tvar plotu: {{ $data['tvarplotu'] }}
    </li>
    <li>
        <b>1. strana</b>
    </li>
    <li>
        Rozměry plotu: {{ $data['fenceWidth']}}x{{ $data['fenceHeight'] }} m
    </li>
    <li>
        Počet panelů: {{ $data['panelCountTotal'] }} ks
    </li>
    <li>
        Sloupků koncových: {{ $data['totalPostCountK'] }} ks
    </li>
    <li>
        Sloupků průběžných: {{ $data['postCountPA'] }} ks
    </li>
    <li>
        Délka plotu: {{ $data['fenceWidth']}} m
    </li>
    <li>
        Výška sloupku a plotu: {{ $data['fenceHeight'] }} m
    </li>
    <li>
        <b>2. strana</b>
    </li>
    <li>
        Rozměry plotu: {{ $data['fenceWidth2']}}x{{ $data['fenceHeight2'] }} m
    </li>
    <li>
        Počet panelů: {{ $data['panelCountTotal2'] }} ks
    </li>
    <li>
        Sloupků koncových: {{ $data['totalPostCountK2'] }} ks
    </li>
    <li>
        Sloupků průběžných: {{ $data['postCountP2A'] }} ks
    </li>
    <li>
        Délka plotu: {{ $data['fenceWidth2']}} m
    </li>
    <li>
        Výška sloupku a plotu: {{ $data['fenceHeight2'] }} m
    </li>
    <li>
        <b>3. strana</b>
    </li>
    <li>
        Rozměry plotu: {{ $data['fenceWidth3']}}x{{ $data['fenceHeight3'] }} m
    </li>
    <li>
        Počet panelů: {{ $data['panelCountTotal3'] }} ks
    </li>
    <li>
        Sloupků koncových: {{ $data['totalPostCountK3'] }} ks
    </li>
    <li>
        Sloupků průběžných: {{ $data['postCountP3A'] }} ks
    </li>
    <li>
        Délka plotu: {{ $data['fenceWidth3']}} m
    </li>
    <li>
        Výška sloupku a plotu: {{ $data['fenceHeight3'] }} m
    </li>
    <li>
        ----------------------------------------------------------
    </li>
    <li>
        Počet položek: {{ $data['itemCount']  }} ks
    </li>
    <li>
        Sloupků celkem: {{ $data['totalPostCount'] }} ks, včetně 2 ks rohového
    </li>
    <li>
        Orientační cena celkem: {{ $data['totalPrice'] }} Kč
    </li>
</ul>
</p>
@endif

<b>Orientační cena celkem bude upravena podle místa realizace zakázky a bude přičtena cena za montáž a dopravu.</b>
<b>Uvedené ceny jsou bez DPH.</b>
<br><br>
S pozdravem<br>
Betonové ploty - Jaroslav Cipra<br>
www.betonoveplotycipra.cz<br>
Email: betonoveplotykraluvdvur@seznam.cz<br>
Tel.: +420 606 415 330, 722 900 387
