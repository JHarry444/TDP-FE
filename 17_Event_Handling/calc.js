'use strict';

const calcInput = document.getElementById("calcInput");

let eraseNext = false;

for (let numberButton of document.querySelectorAll("div#calc button.number-btn")) {
    numberButton.addEventListener("click", function (event) {
        // console.log("Event: ", event);
        if (eraseNext) {
            calcInput.value = "";
            eraseNext = false;
        }
        calcInput.value += event.target.innerText;

    });
}

let firstNum;
let operator;

for (let operatorButton of document.querySelectorAll("div#calc button.operator-btn")) {
    operatorButton.addEventListener("click", function (event) {
        // debugger;
        // console.log("Event: ", event);
        firstNum = calcInput.value;
        operator = event.target.innerText;
        calcInput.value = "";

    });
}


document.getElementById("clear-btn").addEventListener("click", function () {
    calcInput.value = "";
});

document.getElementById("equals-btn").addEventListener("click", function () {
    let secondNum = calcInput.value;
    let result;
    switch (operator) {
        case "+":
            result = parseFloat(firstNum) + parseFloat(secondNum);
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            result = firstNum / secondNum;
            break;
    }
    // debugger;
    calcInput.value = result;
    firstNum = undefined;
    operator = undefined;
    eraseNext = true;
});

