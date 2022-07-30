import styled from "styled-components";
import { SeletorPagina } from "./components/SeletorPagina/SeletorPagina";
import { GlobalStyle } from "./GlobalStyle";


function App() {

 const PaideTodos = styled.div `
  border: 1px solid black;

  display: flex;
 
 
  width: 30vw;
  height: 90vh;
  margin: 0 auto;
  margin-top: 2rem;
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
