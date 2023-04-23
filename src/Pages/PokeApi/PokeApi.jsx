import { useFlagContext } from "../../Context/DataContext"
import { useEffect } from "react";

const PokeApi = () => {
  const { setTitle, title } = useFlagContext();
  setTitle('Pokemons Search')

    useEffect(()=>{
        document.title = title
    }, [title])
  return (
    <div>PokeApi</div>
  )
}
export default PokeApi