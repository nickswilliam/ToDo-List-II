import ErrorPic from '../../../assets/img/notfound/error.png'
import { ErrorContainer, ErrorImg } from './PokemonErrorStyle'
const PokemonError = ({error}) => {
  return (
    <ErrorContainer>
        <ErrorImg src={ErrorPic} alt='error-croise'/>
        {error}
    </ErrorContainer>
  )
}
export default PokemonError