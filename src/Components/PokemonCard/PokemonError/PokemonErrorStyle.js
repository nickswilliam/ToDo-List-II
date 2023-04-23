import styled from "styled-components";

export const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    padding: 10px;
    color: rgba(255, 20, 60);
    font-size: 24px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    text-shadow: 4px 4px 10px rgba(13, 14, 15, 0.3);
`

export const ErrorImg = styled.img`
    width: 60px;
    height: 60px;
    filter: drop-shadow(5px 5px 10px rgba(13,14,15,0.3));
`

