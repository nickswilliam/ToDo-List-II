import Footer from "../Footer/Footer"
import Navbar from "../NavBar/Navbar"
import { LayoutContainer } from "./LayoutStyles"

const Layout = ({ children }) => {

  return (
    <LayoutContainer>
      <Navbar />

      {children}

      <Footer />
    </LayoutContainer>
  )
}
export default Layout