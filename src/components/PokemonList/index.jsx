import { PokemonCard } from '../PokemonCard'

import './PokemonList.css'

export const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} name={pokemon.name} image={pokemon.sprites.front_default}/>
      ))}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}
