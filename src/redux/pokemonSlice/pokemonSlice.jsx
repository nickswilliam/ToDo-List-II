import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemon: null,
  error: null
}

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getPokemon: (state, action) => {
      state.pokemon = action.payload
    },
    errorPokemon: (state, action) => {
      state.error = action.payload
    }
  }
  
})

export const { getPokemon, errorPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;