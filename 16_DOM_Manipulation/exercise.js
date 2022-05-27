"use strict"

const makeParagraph = () => {
    const newPara = document.createElement("p");
    newPara.id = "newPara";
    document.body.appendChild(newPara);
}

const updateParagraph = () => {
    const para = document.getElementById("newPara");
    const paraText = document.getElementById("paraText").value;
    para.innerText = paraText;
}

const deleteParagraph = () => {
    const para = document.getElementById("newPara");
    para.remove();
}