import { CardContainer, CardImg, CardTexts, CardTitle } from "./PokemonCardStyles"

const PokemonCard = (data) => {
const {name, height, weight, sprites} = data;
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