/*
var moje_promenna = 1;

let moje_promenna = 1;
moje_promenna = 2;

const moje_promenna = 1;
*/

let moje_promenna = 1;
if (moje_promenna == 1) {
    //console.log('hodnota');
}

if (moje_promenna === 1) {
    //console.log('hodnota a typ');
}

if (1 == '1') {
    // true
}

if (1 === '1') {
    // false
}

if (1 != '1') {
    // false
}

if (1 !== '1') {
    // true
}

for (let i = 0; i < 10; i++) {
    //console.log(i);
}

// ----

function test() {
    console.log('test');
}

test();

function test_with_param(param) {
    console.log(param);
}

test_with_param('test');
test_with_param(1);
test_with_param({ a: 1 });
test_with_param([1, 2, 3]);

function test_with_multiple_params(param1, param2) {
    console.log(param1, param2);
}

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));

function sum_with_default(a, b = 0) {
    return a + b;
}

console.log(sum_with_default(1));
console.log(sum_with_default(1, 0));
console.log(sum_with_default(1, 2));

let str = 'test';
let num = 1;
let num_float = 1.5;
let arr = [1, 2, 3];
let obj = { a: 1, b: 2 };
let bool = true;
let nul = null;
let undef = undefined;

let x;
console.log(x);
console.log(y);
console.log(obj.a, obj.b);
console.log(obj.c);

// ----

const person = {
    name: 'John',
};

const person_json = JSON.stringify(person); // '{"name":"John"}'
const original_person = JSON.parse(person_json); // { name: 'John' }

// --

/*$var = [
    "name" => "John",
];
$obj = (object) $var;*/

/*class Person {
    $name;
}

$person = new Person();
$person->name = 'John';

// serializace objektu do stringu pomoci json
json_encode($person); -> '{"name":"John"}'*/

//milan_encode($person); // [object:Person->name:John]


// -----ARGUMENTY FUNKCE-----

function sum(d, e) {
    let f = d + e;
    return f;
}

function sum(a, b, f) {
    return a + b + f;
}

console.log(sum(1, 2));

let c = 1;
console.log(sum(c, 2));

function sum(obj) {
    return obj.a + obj.b;
}

console.log(sum({ a: 1, b: 2 }));