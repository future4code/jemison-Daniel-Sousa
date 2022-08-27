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
    height: 30vw;

    padding: 1rem;
    margin-top: 1rem;
    border-radius: 1rem;
    
    overflow-y: scroll ;
    scrollbar-color: red;
    
`

export const MainFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    

    margin-top: 1rem;

    
    border-radius: 1rem;
`

////

export const ConteinerPai = styled.div `
    display: flex;
    justify-content: left;
    align-items: center;


    gap:10px;
    padding: 0.5rem;
    border-bottom: 1px solid;

    img{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 10px;
    }

    p{
        font-size: 1.4rem;
    }
`

export const BackButton = styled.button `
        font-size: 1.2rem;
        font-weight: bold;
        background: #ffce75;
        border:none;
        cursor: pointer;

        width: 70%;
        height: 8vh;
        padding:1.2rem;
        border: 1px solid;
        border-radius: 10px;

        display: flex;
        align-items: center;
        gap:5px;

        
`