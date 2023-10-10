import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from '../actions/types'

const initialState = {
  pokemons: [],
  loading: false,
}

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload }
    case SET_FAVORITE:
      // eslint-disable-next-line no-case-declarations
      const newPokemonList = [ ...state.pokemons]
      // eslint-disable-next-line no-case-declarations
      const currentPokeIndex = newPokemonList.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId
      })
      if (currentPokeIndex < 0) {
        return state
      }
      newPokemonList[currentPokeIndex].favorite =
      !newPokemonList[currentPokeIndex].favorite
      return { ...state, pokemons: newPokemonList}
    case SET_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
