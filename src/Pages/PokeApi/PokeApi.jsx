import { MainTitle, PokeContainer } from "./PokeApiStyles"
import { InputUI, InputContainer } from "../../Components/InputUI/InputStyles"
import { ButtonUI } from "../../Components/ButtonUI/ButtonUIStyles"
import { useState, useEffect } from "react"
import axios from "axios"
import PokemonCard from "../../Components/PokemonCard/PokeCard/PokemonCard"
import PokemonLogo from '../../assets/img/home/pokemon.png'
import PokemonError from "../../Components/PokemonCard/PokemonError/PokemonError"

const PokeApi = () => {
  useEffect(()=>{
    document.title = 'Pokemon - Search'
  }, [])

  const initialPokemon = {
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

  const [inputNum, setInputNum] = useState('')
  const [error, setError] = useState(null)
  const [data, setData] = useState(initialPokemon)

  const handlePokemon = async (id) => {
    setError(null)
    setData(null)

    try {
      const idSearch = parseInt(id)
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idSearch}`)
      setData(data)
    } catch (error) {
      console.log(error, 'error de la api request')
      setError('Pokemon no encontrado, intenta con otro ID')
      setData(null)
    }
  }



  const handleInput = e => {
    setInputNum((e.target.value))
  }

  const searchPokemon = e => {
    e.preventDefault();

    if (inputNum === '') return;

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

      
      {error && <PokemonError error={error}/>}
      {data && <PokemonCard {...data}/>}
    </PokeContainer>

  )
}
export default PokeApi