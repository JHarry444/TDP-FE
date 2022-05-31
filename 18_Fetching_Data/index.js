'use strict';

// fetch("https://pokeapi.co/api/v2/pokemon/sneasel")
//     .then(res => res.json()).then(json => console.log(json))
//     .catch(err => console.error(err));

axios.get("https://pokeapi.co/api/v2/pokemon/sneasel")
    .then(response => console.log(response.data))
    .catch(err => console.error(err));

// fetch("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
//     .then(res => console.log("RESPONSE: ", res))

// axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
//     .then(response => {
//         console.log(response.data);
//         // document.write(JSON.stringify(response.data, null, 2))
//         document.getElementById('output').innerText = JSON.stringify(response.data, null, 2);
//     }).catch(err => console.error(err));

const output = document.getElementById('output');


axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(response => {
        const heroes = response.data;
        console.log("HEROES: ", heroes);

        const squadName = document.createElement("h1");
        squadName.innerText = heroes.squadName;
        output.appendChild(squadName);

        const secretBase = document.createElement("p");
        secretBase.innerText = "Secret base: " + heroes.secretBase;
        output.appendChild(secretBase);

        const homeTown = document.createElement("p");
        homeTown.innerText = "Hometown: " + heroes.homeTown;
        output.appendChild(homeTown);

        const formed = document.createElement("p");
        formed.innerText = "Formed: " + heroes.formed;
        output.appendChild(formed);


        for (let member of heroes.members) {
            console.log("MEMBER: ", member);
            const memberSection = document.createElement("section");

            const memberName = document.createElement("h2");
            memberName.innerText = member.name;
            memberSection.appendChild(memberName);

            const powers = document.createElement("ul");

            for (let power of member.powers) {
                const p = document.createElement("li");
                p.innerText = power;
                powers.appendChild(p);
            }

            memberSection.appendChild(powers);

            output.appendChild(memberSection);
        }

    }).catch(err => console.error(err));