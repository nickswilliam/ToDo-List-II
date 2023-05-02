import { createSlice } from "@reduxjs/toolkit";
import PokemonLogo from '../../assets/img/home/pokemon.png'

const initialState = {
    pokemon: {
        name: 'Así se vería tu pokemón', 
        height: 12.2, 
        weight: 72, 
        sprites: {
          other: {
            home:{
              front_default: PokemonLogo
            }
          } 
        }
      }
}

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        getPokemon: (state, action) => {
            state.pokemon = action.payload
        }
    }
})

export const { getPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;