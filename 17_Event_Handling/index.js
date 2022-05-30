"use strict";

const counter = document.getElementById("counter");

const updateCounter = (event) => {
    const change = event.target.innerText;
    if (change === "R") return counter.value = "0";
    const current = counter.value;
    const result = parseInt(current) + parseInt(change);

    counter.value = result;
    writeHistory(current, change, result)
}

const minusFive = () => {
    counter.value = parseInt(counter.value) - 5;
}

const minusOne = () => {
    counter.value = parseInt(counter.value) - 1;
}

const reset = () => {
    counter.value = "0";
}

const plusOne = () => {
    counter.value = parseInt(counter.value) + 1;
}

const plusFive = () => {
    counter.value = parseInt(counter.value) + 5;
}

const output = document.getElementById("output");

const writeHistory = (num1, num2, result) => {
    const newHistory =  document.createElement("p");
    // output.innerText = num1 + " " + op + " " + num2 + " = " + result;
    newHistory.innerText = `${num1}${num2}=${result}`;
    output.prepend(newHistory);

    if (output.childNodes.length > 5) {
        output.childNodes[5].remove();
    }
}