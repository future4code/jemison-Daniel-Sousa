import styled from "styled-components";

export const BoxMaster = styled.section `
    display: flex;
    align-items: center;
    
    width: 100vw;
    height: 10vh;
    background: #121214;
    color: #ffa267;

`

export const MainHeader = styled.header `
    display: flex;
    justify-content: space-between;

    width: 100vw;
    padding: 5rem;

`

export const SectionMenu = styled.section`
    display: flex;
    gap: 0.58rem;


`


export const HeaderButton = styled.button `

    padding: 0.3rem;
    background-color: #ffa267;
    border: 1px solid white;
    font-size: 0.8rem;


    cursor: pointer;

    :hover{
        font-size: 0.9rem;
    }
`