import styled from "styled-components";

export const MasterBox = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    width: 100vw;
    

`

export const MainCard = styled.div `
    display:grid;
    
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    margin-top: 2rem;


`

export const Card = styled.div `
    border: 1px solid black;

    display: flex;
    

    padding: 0.5rem;
    width: 20rem;
    height: 25vh;
`