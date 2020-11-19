const fetch = require('node-fetch')
const fs = require('fs')


for (var i = 2; i < process.argv.length; i++) {
    fs.readFile(process.argv[i], pokeFiles);
}


function findPokemon(pokiName) {
fetch(`https://pokeapi.co/api/v2/pokemon/${pokiName}`)
    .then(response => response.json())
    .then(json => (json.types.map(element => element.type.name)))
    .then(data => console.log(pokiName + ': ' + data))
    .catch(data => console.log(pokiName+" doesnt exist!"))
}

function pokeFiles(err, data){
    if (err) throw err;
    data=data.toString();

    arrayOfPokemonNames = data.split('\n');

    for (let pokemonName of arrayOfPokemonNames){
        findPokemon(pokemonName);
    }
}
//node assessment.js input.txt pokemon.txt