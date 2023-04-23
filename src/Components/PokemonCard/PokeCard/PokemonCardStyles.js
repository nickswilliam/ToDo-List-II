import styled from "styled-components";

export const CardContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 20px;
    border: 2px solid rgba(40, 10, 200, 1);
    border-radius: 40px;
    background-color: rgba(13, 14, 20, 0.5);
    backdrop-filter: blur(5px);
`
export const CardTitle = styled.h2`
    font-size: 34px;
    font-weight: 600;
    color: rgb;
    text-align: center;
    color: rgb(250, 180, 30);
    width: 80%;
`

export const CardImg = styled.img`
    width: 200px;
    height: 200px;
    padding: 20px;
`
export const CardTexts = styled.p`
    color: rgba(210, 210, 210, .6);
    font-weight: 400;

`