
import pokemon from './data/pokemon/pokemon.js'
import data from './data/pokemon/pokemon.js'

let pokemons = data.items
console.log(pokemons)


pokemons.forEach((pokemon)=>{
    console.log(pokemon.id)
})


//tenho que entrar primeiro no array dp no objeto
/*for(let pokemonName of pokemons){
        console.log(pokemonName.id)
    }*/