"use strict" // tells the browser to hold you to modern JS standards
multiply(20, 2)

function hoisting() {
    console.log(x);
    x = 5;
    console.log(x);
    var x  = 2;
    console.log(x);
}

function noHoisting() {
    console.log(x);
    x = 5;
    console.log(x);
    let x  = 2;
    console.log(x);
}


function impliedGlobal() {
    j = 27;
    console.log(j);
}

function add(a, b) {
    console.log("Yo!");
}