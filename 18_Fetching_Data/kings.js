'use strict';

const output = document.getElementById('output');

document.getElementById('searchInput').addEventListener("input", function (event) {
    const search = event.target.value;

    renderKings(search);
});

function renderKings(search) {
    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
        .then(response => {
            output.innerHTML = "";
            for (let king of response.data) {
                console.log("KING: ", king);

                if (search && !king.nm.toLowerCase().startsWith(search.toLowerCase())) continue;

                const kingDiv = document.createElement("div");

                const kingName = document.createElement("h2");
                kingName.innerText = king.nm;
                kingDiv.appendChild(kingName);

                const kingHouse = document.createElement("p");
                kingHouse.innerHTML = "House: " + king.hse;
                kingDiv.appendChild(kingHouse);

                const kingCity = document.createElement("p");
                kingCity.innerHTML = "Country: " + king.cty;
                kingDiv.appendChild(kingCity);

                const kingYears = document.createElement("p");
                kingYears.innerHTML = "Years: " + king.yrs;
                kingDiv.appendChild(kingYears);

                output.appendChild(kingDiv);
            }
        }).catch(err => console.error(err));
}

renderKings();