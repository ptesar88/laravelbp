
<b>Dobrý den, děkujeme za Vaší poptávku a zasíláme celkový přehled poptávaného záhonu.</b>
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
        Doprava: {{ $data['doprava'] }}
    </li>
</ul>
</p>

<p>
    <h3>Detaily záhonu:</h3>
<ul style="list-style-type: square">
    <li>
        Produkt: {{ $produkt->name }}
    </li>
    <li>
        Rozměry záhonu: {{ $produkt->width }}x{{ $produkt->height }}x{{ $produkt->depth }} cm
    </li>
    <li>
        Cena/ks: {{ $produkt->price }} Kč
    </li>
    <li>
        Celkem kusů: {{ $data['bedAmount'] }}
    <li>
        ----------------------------------------------------------
    </li>
    <li>
        Orientační cena celkem: {{ $data['totalPrice'] }} Kč
    </li>
</ul>
</p>


<b>Orientační cena celkem bude upravena podle místa realizace zakázky a bude přičtena cena za montáž a dopravu. </b>
<b>Uvedené ceny jsou bez DPH.</b>
<br><br>
S pozdravem<br>
Betonové ploty - Jaroslav Cipra<br>
www.betonoveplotycipra.cz<br>
Email: betonoveplotykraluvdvur@seznam.cz<br>
Tel.: +420 606 415 330, 722 900 387
