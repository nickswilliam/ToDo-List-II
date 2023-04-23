import { useEffect } from "react";
import { HomeContainer, HomeImg, HomeImgs, HomeMainText } from "./HomeStyles";
import Pokemon from '../../assets/img/home/pokemon.png'
import TodoList from '../../assets/img/home/todo-list.png'
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(()=>{
    document.title = 'Inicio'
  }, [])

  return (
    <HomeContainer>
      <HomeMainText>
        Bienvenid@ a la aplicación <span>ToDo List</span> & <p>Pokemon Search.</p>
      </HomeMainText>

      <HomeImgs>
        <Link to='/todo' title="Link a ToDo List">
          <HomeImg src={TodoList} style={{ backgroundColor: 'rgb(250, 80, 20)' }} />
        </Link>

        <Link to='/pokeapi' title="Link a Pokemons Search">
          <HomeImg src={Pokemon} style={{ backgroundColor: 'rgb(220, 130, 20)' }} />
        </Link>
      </HomeImgs>
    </HomeContainer>
  )
}
export default Home