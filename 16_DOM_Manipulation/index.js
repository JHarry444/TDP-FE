"use strict";

const title = document.createElement("h1");

title

title.innerText = "Let's manipulate the DOM";

title

document.body.appendChild(title);

const div = document.getElementById("myDiv");

console.log("target div: ", div);

const newButton = document.createElement("button");

newButton.innerText = "PRESS ME";

newButton

div.prepend(newButton);

const secondDiv = document.querySelector("body > div.divNoId");

console.log(secondDiv);

const greet = () => console.log("Hello, World!");