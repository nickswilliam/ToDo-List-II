import { ErrorContainer, MainTitle, PokeContainer } from "./PokeApiStyles"
import { InputUI, InputContainer } from "../../Components/InputUI/InputStyles"
import { ButtonUI } from "../../Components/ButtonUI/ButtonUIStyles"
import { useState, useEffect } from "react"
import axios from "axios"
import PokemonCard from "../../Components/PokemonCard/PokeCard/PokemonCard"
import PokemonError from "../../Components/PokemonCard/PokemonError/PokemonError"
import { useDispatch, useSelector } from "react-redux"
import { getPokemon, errorPokemon } from "../../redux/pokemonSlice/pokemonSlice"

const PokeApi = () => {
  useEffect(() => {
    document.title = 'Pokemon - Search'
  }, [])

  const { error, pokemon } = useSelector(state => ({
    error: state.pokemons.error,
    pokemon: state.pokemons.pokemon
  }))

  const dispatch = useDispatch();
  const [inputNum, setInputNum] = useState('')


  const handlePokemon = async (id) => {
    dispatch(getPokemon(null))
    dispatch(errorPokemon(null))

    try {
      const idSearch = parseInt(id)
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idSearch}`)
      dispatch(getPokemon(data))
    } catch (error) {
      console.log(error, 'error de la api request')
      dispatch(errorPokemon('Pokemon no encontrado, intenta con otro ID'))

      setTimeout(() => {
        dispatch(errorPokemon(null))
      }, 2500)
      dispatch(getPokemon(null))
    }
  }


  const handleInput = e => {
    setInputNum((e.target.value))
  }

  const searchPokemon = e => {
    e.preventDefault();

    if (!inputNum) {
      dispatch(getPokemon(null))
      dispatch(errorPokemon('Debe ingresar un ID para buscar pokemons'))
      setTimeout(() => {
        dispatch(errorPokemon(null))
      }, 2500)
      return;
    }

    handlePokemon(inputNum)
    setInputNum('')
  }


  return (

    <PokeContainer>
      <MainTitle>Pokemon Search</MainTitle>
      <InputContainer onSubmit={searchPokemon} title="Buscá un Pokemon por ID">
        <InputUI
          type="number"
          onChange={handleInput}
          value={inputNum}
          autoComplete="off"
          placeholder="Ingrese un Número de ID"
        />
        <ButtonUI type="submit" title="Buscar Pokemons">Buscar</ButtonUI>


      </InputContainer>

      <ErrorContainer>
        {error && <PokemonError error={error} />}
      </ErrorContainer>

      {!pokemon ? '' : <PokemonCard {...pokemon} />}
    </PokeContainer>

  )
}
export default PokeApi