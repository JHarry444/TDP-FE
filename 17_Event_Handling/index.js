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

const buttons = document.getElementById("counterButtons").childNodes;
for (let button of buttons) {
    button.addEventListener("click", updateCounter);
}

const minusFive = () => {
    counter.value = parseInt(counter.value) - 5;
}
// minusFive is a CALLBACK
document.getElementById("minusFiveButton").addEventListener("click", minusFive)



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

    const delButton = document.createElement("button");
    delButton.innerText = "X";
    delButton.addEventListener("click", function() {
        const del = confirm("Are you sure you want to delete this?");
        if (del) newHistory.remove();
    })
    newHistory.appendChild(delButton);
    output.prepend(newHistory);

    // if (output.childNodes.length > 5) {
    //     output.childNodes[5].remove();
    // }
}