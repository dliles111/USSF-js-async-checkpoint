
const fetch = require('node-fetch')
const fs = ('fs')

let pokemon = " "

fetch('https://pokeapi.co/api/v2/pokemon/?offset=00&limit=20')
    .then(response => response.json())
        .then((input) => {
            data = input.results;
            data.forEach(element => {
                let pokiName =  element.name;
                
                function findPokemon() {
                    fetch(`https://pokeapi.co/api/v2/pokemon/${pokiName}`)
                        .then(response => response.json())
                        
                            .then(json => (json.types.map(element => element.type.name)))
        
                   .then(data => console.log(pokiName + ': ' + data))
                }
                findPokemon();
    
            })
        })
        

            
              


            