'use strict';

fetch("https://pokeapi.co/api/v2/pokemon/sneasel")
    .then(res => res.json()).then(json => console.log(json))
    .catch(err => console.error(err));

// axios.get("https://pokeapi.co/api/v2/pokemon/sneasel")
//     .then(response => console.log(response.data))
//     .catch(err => console.error(err));