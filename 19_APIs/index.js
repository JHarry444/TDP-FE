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
            form.duckName.focus();
            form.reset();
            renderDucks();
        })
        .catch(err => console.error(err));

    console.log("DUCK: ", duck);
});

function renderDucks() {
    axios.get("http://localhost:8080/duck/readAll")
        .then(res => {
            console.log("DUCKS: ", res.data);
            output.innerHTML = "";
            for (let duck of res.data) {
                const duckCol = document.createElement("div");
                duckCol.className = "col";

                const duckCard = document.createElement("div");
                duckCard.className = "card";
                duckCol.appendChild(duckCard);

                const duckDiv = document.createElement("div");
                duckDiv.className = "card-body";
                duckCard.appendChild(duckDiv);

                const duckName = document.createElement("h2");
                duckName.innerText = duck.name;
                duckDiv.appendChild(duckName);

                const duckAge = document.createElement("p");
                duckAge.innerText = duck.age + " years old.";
                duckDiv.appendChild(duckAge);

                const duckHabitat = document.createElement("p");
                duckHabitat.innerText = "Lives in " + duck.habitat;
                duckDiv.appendChild(duckHabitat);

                const duckGender = document.createElement("p");
                duckGender.innerText = duck.gender;
                duckDiv.appendChild(duckGender);

                const duckDelete = document.createElement("button");
                duckDelete.innerText = "DESTROY";
                duckDelete.addEventListener("click", function () {
                    deleteDuck(duck.id);
                });

                duckDiv.appendChild(duckDelete);

                output.appendChild(duckCol);
            }
        })
        .catch(err => console.error(err));
}

function deleteDuck(id) {
    axios.delete("http://localhost:8080/duck/delete/" + duck.id)
        .then(res => {
            console.log(res);
            renderDucks();
        })
        .catch(err => console.error(err));
}


renderDucks();