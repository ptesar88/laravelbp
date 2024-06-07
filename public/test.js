/*function fn1(par1) {
  console.log('par1 of fn = ', par1);
}*/

/*
let fn1 = function(par1) {
    console.log('par1 of fn1 = ', par1);
    return "A";
};

function fn2(par2) {
    console.log('par2 of fn2 = ', par2);
    return "B";
};

function obal(param1, ) {
    console.log(param1, param2);

    let v = param1(param2);
    console.log(v);
}

obal(fn1, "Hi fn1");


obal(fn2, "Hi fn2");


obal(
    function(par1) {
        console.log('par1 of fn3 = ', par1);
        return "A";
    },
    "Hi fn3"
);

obal(
    par1 => {
        console.log('par1 of fn3 = ', par1);
        return "A";
    },
    "Hi fn3"
);


let fn5 = par1 => {
    console.log('par1 of fn3 = ', par1);
    return "A";
};

obal(
    fn5,
    "Hi fn3"
);
*/

/*obal({
    target: {
        value: "Hi fn3",
    }
})*/
/*
let o = {
    a: 1,
    b: 2,
    f: function(par1) {
        console.log('par1 of fn1 = ', par1);
        return "A";
    },
};
*/
/*
String.prototype.myFunction = function() { 
    this.toUpperCase();
};

let s = "Hello";
s.myFunction();

s.length();
s.replace();
*/

let moje_pole = [1, 2, 3];
/*for (let i = 0; i < moje_pole.length; i++) {
    console.log(moje_pole[i]);
}*/
/*
Array.prototype.muj_cyklus = function(funkce) {
    for (let i = 0; i < this.length; i++) {
        funkce(this[i]);
    }
}

moje_pole.muj_cyklus(prvek => {
    console.log(prvek);
});
*/

let moje_pole = [1, 2, 3];
moje_pole.forEach(prvek => {
    
});

moje_pole
    .filter(i => i == 1)
    .find(i => i == 1)
    .foreach()
    .sort();

moje_pole.find(i => i == 1);

moje_pole.find(function najdi_podle_id(hodnota) {
    if (hodnota.id == id) {
        return hodnota;
    } else {
        return null;
    }
})

i => i.id == id


//true false v podmince
moje_pole.filter(i => i.id == id);



//

async function a() {
    // nacti soubor
    await fileRead();
    // rozdel na radky
    // udelej cyklus radky
    // najdiu radek kde sloupce c.u. == muj ucet
    // pridej castu do celkove sumy
    // vrat sumu / vypiš sumu
}

// -----


async function moje_fn() {

}


await moje_fn()

async fn a() {

}

a().await;


let result = get('http://localhost:3000/api/v1/').then(data => JSON.parse(data)).then(data => console.log(data));
