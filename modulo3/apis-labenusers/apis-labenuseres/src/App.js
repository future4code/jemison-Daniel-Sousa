
import { TelaDeCastro } from "./components/TelaDeCadastro/TelaDeCadastro";
import styled from "styled-components";

const ConteinerPrincipal = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  width: 100%;
  height: 80vh;


`

function App() {
  




  return (
    <ConteinerPrincipal>
      <h1> Formulario De Cadastro</h1>
      <TelaDeCastro></TelaDeCastro>
    </ConteinerPrincipal>
    
  );
}

export default App;
