import styled from "styled-components";

export const HomeContainer = styled.div`
    padding: 60px 40px 40px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1300px;
    width: 100%;
    gap: 30px;
`

export const HomeMainText = styled.h1`
    font-size: 40px;
    text-align: center;
    color: rgb(200, 180, 250);
    width: 80%;
    text-shadow: 4px 4px 10px rgba(13, 14, 15, 0.7);

    span{
        color: rgb(240, 60, 20);
    }

    p{
        color: rgb(190, 130, 20);
    }
`

export const HomeImgs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`

export const HomeImg = styled.img`
    width: 300px;
    height: 300px;
    border: 3px double rgba(213, 213, 213, 0.6);
    padding: 40px;
    border-radius: 50px;
    transform: scale(1);
    box-shadow: -20px 20px 10px rgba(13, 14, 15, 0.3);
    opacity: 80%;
    transition: all ease 0.25s;

    &:hover{
        transform: scale(1.05);
        border: 3px solid rgba(20, 220, 220, 1);
        cursor: pointer;
        opacity: 100%;
        filter: drop-shadow(0px 0px 10px rgba(20, 220, 220, 1));
        transition: all ease-out 0.2s;
        
    }
`