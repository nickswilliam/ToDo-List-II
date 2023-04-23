import styled from "styled-components";

export const ButtonUI = styled.button`
    border: 2px solid ${({ color, dif }) => (color ? 'rgba(235, 0, 80, 1)' : dif ? 'rgba(20, 60, 200, 1)' : 'rgba(210, 90, 0, 1)')};
    background-color: ${({ color, dif }) => (color ? 'rgba(235, 0, 70, 1)' : dif ? 'rgba(20, 60, 200, 1)' : 'rgba(210, 80, 0, 1)')};
    outline: none;
    color: #fafafa;
    cursor: pointer;
    text-align: center;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;

    &:hover{
        border: 2px solid ${({ color, dif }) => (color ? 'rgba(235, 0, 80, 0.6)' : dif ? 'rgba(20, 60, 200, 0.6)' : 'rgba(210, 90, 0, 0.6)')};
        background-color: ${({ color, dif }) => (color ? 'rgba(235, 0, 70, 0.6)' : dif ? 'rgba(20, 60, 200, 0.6)' : 'rgba(210, 80, 0, 0.6)')};
        color: #fafafaa1;
    }

    &:disabled{
        cursor: not-allowed;
        border: 2px solid ${({ color }) => (color ? '#212530' : 'rgba(210, 90, 0, 1)')};
        background-color: ${({ color }) => (color ? '#212529' : 'rgba(210, 80, 0, 1)')};
        color: #495057;
    }

    @media (max-width: 480px){
        padding: 10px 10px;
    }
`

export const ButtonTransparent = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    color: #fafafa;
    cursor: pointer;
    text-align: center;
    font-size: 22px;

    &:hover{
        opacity: 60%;
    }
    
`