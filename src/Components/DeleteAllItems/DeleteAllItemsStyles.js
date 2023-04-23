import styled from "styled-components";

export const DivBlur = styled.div`
    position: fixed;
    left: 0;
    top: 0;  
    background-color: rgba(13,14,15, 0.7);
    width: 100%;
    height: 100%;
    z-index: 2;
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: ${({ show }) => (show ? 'hidden' : 'visible')};
    transform: scale(${({ show }) => (show? '0' : '1')});
    transition: all 0.06s ease;
`

export const WindowToDelete = styled.div`
    background-color: rgba(10, 10, 50, 0.75);
    border-radius: 50px 0px 50px 0px;
    border: 2px solid #fafafa;
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 10px rgba(200, 50, 50, 0.1);
    z-index: 4;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    justify-content: space-around;
    padding: 30px 40px;
    text-align: center;
    transform: scale(${({ show }) => (show? '0' : '1')});
    transition: all 0.35s ease;
`

export const ContainerButtons = styled.div`
    padding: 10px;
    display: flex;
    gap: 15px;

`