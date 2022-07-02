
import styled from "styled-components";

 export const ContainerPrincipal = styled.div `
    display: flex;
    flex-direction: row;

 `

 export const Sidebar = styled.div `
    background-color:#fea859;
    width: 15%;
    height:80vh;

 `

 export const CantainerMain = styled.div`
    width: 70%;
    display:flex;
    align-items: flex-end;
    justify-content: center;
    gap: 1.2rem;
    padding: 10px;

    label{
        font-weight:bold;
    }
    
    input{
        width: 300px;

    }
 
 `