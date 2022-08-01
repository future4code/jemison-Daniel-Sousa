import styled from "styled-components";

export const MainContainer = styled.div `
   display: flex;
   flex-direction: column;
   padding: 1rem;

`

export const MainHeader = styled.header `
   display: flex;
   flex-direction: row;
   justify-content:space-between;
   align-items: center;
   padding: 1rem;
   width:100%; 
   

   border: 1px solid #7c7672;
   border-radius: 1rem;


`

export const MainPrincipal = styled.main `
    border: 1px solid black;
    height: 25vw;

    padding: 1rem;
    margin-top: 1rem;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MainFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;

    margin-top: 1rem;

    border: 1px solid black;
    border-radius: 1rem;
`

export const SecaoUserPhoto = styled.section`
    width: 100%;
   


`

export const PhotoUser = styled.img `
    width:100%;
   
   
`
