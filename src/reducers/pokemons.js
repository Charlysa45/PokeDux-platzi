import { fromJS, get, getIn, setIn } from 'immutable'
import { SET_FAVORITE, SET_POKEMONS } from '../actions/types'

const initialState = fromJS({
  pokemons: [],
})

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      // return { ...state, pokemons: action.payload }
      return setIn(state, ['pokemons'], fromJS(action.payload))
    case SET_FAVORITE:
      // eslint-disable-next-line no-case-declarations
      // const newPokemonList = [ ...state.pokemons]
      // eslint-disable-next-line no-case-declarations
      const currentPokeIndex = get(state, 'pokemons').findIndex((pokemon) => pokemon.get('id') === action.payload.pokemonId)
      if (currentPokeIndex < 0) {
        return state
      }
      // eslint-disable-next-line no-case-declarations
      const isFavorite = getIn(state, ['pokemons', currentPokeIndex, 'favorite'])
      return setIn(state, ['pokemons', currentPokeIndex, 'favorite'], !isFavorite)
    default:
      return state
  }
}
