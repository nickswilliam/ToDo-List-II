import { useFlagContext } from "../../Context/DataContext"
import { useEffect } from "react";

const Home = () => {
  const { setTitle, title } = useFlagContext();

  setTitle('Inicio')
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <div>Home</div>
  )
}
export default Home