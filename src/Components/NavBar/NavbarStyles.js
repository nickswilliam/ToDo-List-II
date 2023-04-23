import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderNav = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 2px solid rgba(140, 140, 140, .8);
    height: 80px;
    width: 100%;
    background-color: rgba(13, 14, 80, 0.6);
    backdrop-filter: blur(8px);
    box-shadow: 0px 4px 10px rgba(13, 14, 15, 0.5);
    position: fixed;
    top: 0;
    left: 0;
`

export const LogoImg = styled.img`
    width: 300px;
    padding: 4px;

`

export const Nav = styled.nav`
    padding: 5px;
`

export const UlList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;
`

export const LiItem = styled.li`
    list-style: none;
    list-style-type: none;
    text-decoration: none;
    padding: 0px 20px;
    opacity: 70%;
    cursor: pointer;

    &:hover{
        opacity: 100%;
    }
`

export const LinkItem = styled(Link)`
    font-size: 22px;
    text-decoration: none;
    font-weight: 600;
    color: ${({ item }) => (item ? 'rgb(255, 80, 20)' : 'rgb(240, 240, 240)')};
    display: flex;
    gap: 10px;
    align-items: center;
`