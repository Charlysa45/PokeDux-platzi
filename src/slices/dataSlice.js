import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPokemon, getPokemonDetails } from '../services/api'
import { setLoading } from './uiSlice'

const initialState = {
    pokemons: []
}

export const fetchPokemonWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, {dispatch}) => {
      dispatch(setLoading(true))
      const pokeList = await getPokemon()
      const pokeDetails = await Promise.all(
        pokeList.map((pokemon) => getPokemonDetails(pokemon))
      )
      dispatch(setPokemons(pokeDetails))
      dispatch(setLoading(false))
    }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
        state.pokemons = action.payload
    },
    setFavorite: (state, action) => {
        const currentPokeIndex = state.pokemons.findIndex((pokemon) => {
            return pokemon.id === action.payload.pokemonId
        })
      if (currentPokeIndex >= 0) {
        const isFavorite = state.pokemons[currentPokeIndex].favorite
        state.pokemons[currentPokeIndex].favorite = !isFavorite
    }
    }
  }
});


export const {setFavorite, setPokemons} = dataSlice.actions
export default dataSlice.reducer