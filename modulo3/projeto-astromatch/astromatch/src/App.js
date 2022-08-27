import styled from "styled-components";
import { SeletorPagina } from "./components/SeletorPagina/SeletorPagina";
import { GlobalStyle } from "./GlobalStyle";


function App() {

 const PaideTodos = styled.div `
    border: 1px solid #000000;
    border-radius: 2.5rem;
    background: white;

    display: flex;
  
  
    width: 25vw;
    height: auto;
    margin: 0 auto;
    margin-top: 1rem;
    flex-direction: column;
 
 
 `


  
  return (
    <PaideTodos> 
      <GlobalStyle/>
       <SeletorPagina/>
    </PaideTodos>
  );
}

export default App;
