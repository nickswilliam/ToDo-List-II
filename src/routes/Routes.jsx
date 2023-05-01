import { BrowserRouter as Router, Routes as RoutesApp, Route } from "react-router-dom"
import Layout from "../Components/Layout/Layout"
import Home from "../Pages/Home/Home"
import ToDo from '../Pages/ToDo/ToDo'
import PokeApi from "../Pages/PokeApi/PokeApi"
import NotFound from "../Pages/NotFound/NotFound"

const Routes = () => {
    return (
        <Router>
            <Layout>
                <RoutesApp>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<ToDo />} />
                    <Route path="/pokeapi" element={<PokeApi />} />
                    <Route path="*" element={<NotFound />} />
                </RoutesApp>
            </Layout>
        </Router>
    )
}
export default Routes