import { HeaderNav, LiItem, LinkItem, LogoImg, Nav, UlList } from "./NavbarStyles"
import Logo from '../../assets/img/logo/logo.png'
import { FaHome, FaListOl, FaListUl, FaGamepad } from 'react-icons/fa'
import { useFlagContext } from "../../Context/DataContext"

const Navbar = () => {

    const { todoList } = useFlagContext();

    return (
        <HeaderNav>
            <LogoImg src={Logo} />
            <Nav>
                <UlList>
                    <LiItem item={false}>
                        <LinkItem to='/'>
                            <FaHome
                                size='22px'
                                pointerEvents='none'
                            />
                            Home
                        </LinkItem>
                    </LiItem>

                    <LiItem>
                        <LinkItem to='/todo' item={todoList.length}>
                            {!todoList.length ?
                                <FaListUl
                                    size='24px'
                                    color="rgb(240, 240, 240)"
                                    pointerEvents='none'
                                />
                                : <FaListOl
                                    size='24px'
                                    color="rgb(255, 80, 20)"
                                    pointerEvents='none'
                                />
                            }
                            ToDo
                        </LinkItem>
                    </LiItem>

                    <LiItem item={false}>
                        <LinkItem to='/pokeapi'>
                            <FaGamepad
                                size='24px'
                                pointerEvents='none' />

                            Pokemons
                        </LinkItem>
                    </LiItem>
                </UlList>
            </Nav>
        </HeaderNav>
    )
}
export default Navbar