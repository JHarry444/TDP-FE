'use strict';

const output = document.getElementById('output');

document.getElementById('duckForm').addEventListener("submit", function (event) {
    event.preventDefault();

    // console.log(this);
    const form = event.target;

    const duck = {
        name: form.duckName.value,
        age: form.duckAge.value,
        habitat: form.duckHabitat.value,
        gender: form.duckGender.value
    }

    axios.post("http://localhost:8080/duck/create", duck)
        .then(res => {
            console.log("RESPONSE: ", res);
            renderDucks();
        })
        .catch(err => console.error(err));

    console.log("DUCK: ", duck);
});

function renderDucks() {
    axios.get("http://localhost:8080/duck/readAll")
        .then(res => {
            output.innerHTML = "";
            for (let duck of res.data) {
                const duckDiv = document.createElement("div");

                const duckName = document.createElement("h2");
                duckName.innerText = duck.name;
                duckDiv.appendChild(duckName);

                output.prepend(duckDiv);
            }
        })
        .catch(err => console.error(err));
}

renderDucks();