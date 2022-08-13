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
    
    grid-template-columns: 1fr;
    gap: 1rem;

    margin-top: 2rem;


`

export const ButtonsSection = styled.section `
    display: flex;
    gap: 0.8rem;

    margin-top: 1rem;

`

export const Card = styled.div `
    border: 1px solid black;

    display: flex;
    

    padding: 0.5rem;
    width: 30rem;
    height: 30vh;
`