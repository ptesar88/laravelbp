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
</ul>
</p>
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
        Typ otisku: {{ $otisk->name }}
    </li>
    <li>
        Typ sloupku: {{ $sloupek->name }}
    </li>
    <li>
        Tvar plotu: {{ $data['tvarplotu'] }}
    </li>
    <li>
        Rozměry plotu: {{ $data['widthFenceM']}}x{{ $data['heightFenceM'] }} m
    </li>
    <li>
        Délka plotu: {{ $data['widthFenceM']}} m
    </li>
    <li>
        Výška sloupku a plotu: {{ $data['heightFenceM'] }} m
    </li>
    <li>
        Počet sloupků: {{ $data['totalPostCount'] }} ks
    </li>
    <li>
        Počet panelů: {{ $data['panelCountTotal'] }} ks
    </li>
    <li>
        Počet položek: {{ $data['itemCount']  }} ks
    </li>
    <li>
        Orientační cena celkem: {{ $data['totalPrice'] }} Kč
    </li>
</ul>
</p>

<b>Orientační cena celkem bude upravena podle místa realizace zakázky a bude přičtena cena za montáž a dopravu.</b>
<b>Uvedené ceny jsou bez DPH.</b>
<br><br>
S pozdravem<br>
Betonové ploty - Jaroslav Cipra<br>
www.betonoveplotycipra.cz<br>
Email: betonoveplotykraluvdvur@seznam.cz<br>
Tel.: +420 606 415 330, 722 900 387
