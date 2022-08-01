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
    height: 30vw;
    gap: 0.3rem;

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

export const SecaoPhotouser = styled.div `
    object-fit: cover;
    padding:0.375rem;
    width: 100%;
    height: auto;
    border: 1px solid;
    border-radius: 8px;
    background-color: red;

`

export const PhotoUser = styled.img `
    width:100%;
    
    height: 300px;

   
`

export const SecaoDescricaoUser = styled.div `
    display: flex;
    flex-direction: row;

    h3{
        display:flex;
        gap: 5px;
    }

`

