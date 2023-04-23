import styled from "styled-components";

export const InputUI = styled.input`
    border: 2px double #fafafa;
    padding: 10px 30px;
    color: #fafafa4f;
    background-color: transparent;
    border-radius: 10px;
    font-size: 22px;

    &:hover{
        border-color: #fafafaa1;
    }

    &:focus{
        box-shadow: 0px 0px 10px rgba(210, 80, 0, 0.5);
    }

    @media (max-width: 768px){
        max-width: 680px;
        width: 100%;
    }

    @media (max-width: 480px){
        padding: 10px 20px;
        font-size: 20px;
    }
`

export const InputContainer = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    padding: 20px 30px;

    @media (max-width: 768px){
        max-width: 680px;
        gap: 40px;
    }

    @media (max-width: 480px){
        max-width: 400px;
        padding: 10px 15px;
        gap: 30px;
    }
`