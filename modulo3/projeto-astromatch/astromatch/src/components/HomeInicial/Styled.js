import styled from "styled-components";

export const MainContainer = styled.div `
   display: flex;
    flex-direction: column;
    padding: 0.7rem;
    


`

export const MainHeader = styled.header `
   display: flex;
   flex-direction: row;
   justify-content:space-between;
   align-items: center;
   padding: 0.5rem;
   width:100%; 
   background: #ffce75;

   border: 1px solid black;
   border-radius: 1rem;


   button{
        background: transparent;
        border:none;
        cursor: pointer;
        
   }
`

export const MainPrincipal = styled.main `
    border: 1px solid black;
    background: #F5FFFA;
    height: 30vw;
    gap: 0.3rem;

    padding: 0.2rem;
    margin-top: 0.5rem;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
   
`

export const MainFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;

    margin-top: 0.5rem;

    
   background: #ffce75;
   border: 1px solid black;
   border-radius: 1rem;


    button{
        background: transparent;
        border:none;
        cursor: pointer;
        
   }
`

export const SecaoPhotouser = styled.div `
    object-fit: cover;
    padding:0.275rem;
    width: 100%;
    height: auto;
    
    

`

export const PhotoUser = styled.img `
    width:100%;
    
    height: 300px;
   
   
`

export const SecaoDescricaoUser = styled.section `
    display: flex;
    

    h3{
        display:flex;
        gap: 5px;
    }

`

export const SecaoBioUser = styled.section `

    
`

