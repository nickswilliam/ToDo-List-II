import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        getPokemon: (state, action) => {

        }
    }
})

export const { getPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;