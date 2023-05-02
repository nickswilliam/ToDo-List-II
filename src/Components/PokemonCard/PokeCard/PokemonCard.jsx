import { CardContainer, CardImg, CardTexts, CardTitle } from "./PokemonCardStyles"

const PokemonCard = (pokemon) => {
const {name, height, weight, sprites} = pokemon;
  return (
    <CardContainer>
        <CardTitle>{name.toUpperCase()}</CardTitle>
        <CardImg src={sprites?.other.home.front_default} alt={name} />
        <CardTexts>Altura: {height/10} m</CardTexts>
        <CardTexts>Peso: {weight/10} Kg</CardTexts>
    </CardContainer>
  )
}
export default PokemonCard