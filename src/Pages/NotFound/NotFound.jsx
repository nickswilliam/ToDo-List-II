import { LinkTo, NotFoundContainer, NotFoundDiv, NotFoundImg, NotFoundText } from "./NotFoundStyles"
import NotFoundImage from '../../assets/img/notfound/sadface.png'
import {FaHouseDamage} from 'react-icons/fa'
import { useEffect } from "react";

const NotFound = () => {
  useEffect(()=>{
    document.title = 'Error 404 | Ruta no encontrada'
  }, [])

  return (
    <NotFoundContainer>
      <NotFoundDiv>
        <NotFoundImg src={NotFoundImage} />
        <NotFoundText>Lo sentimos... ¡Ruta no encontrada!</NotFoundText>
      </NotFoundDiv>

      <LinkTo to='/'>
        <FaHouseDamage/>
        Regresar a Inicio
      </LinkTo>
    </NotFoundContainer>
  )
}
export default NotFound