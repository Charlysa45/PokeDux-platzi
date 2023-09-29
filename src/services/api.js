import axios from 'axios'

const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'

export const getPokemon = async () => {
  const request = await axios
    .get(apiUrl)
    .then((res) => res.data.results)
    .catch((error) => console.error(error))
  return request
}

export const getPokemonDetails = async (pokemon) => {
  const request = axios
    .get(pokemon.url)
    .then((res) => res.data)
    .catch((error) => console.error(error))
  return request
}
