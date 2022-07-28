import { useState } from "react";
import { TelaDeCastro } from "./components/TelaDeCadastro/TelaDeCadastro";


function App() {
  const [nomeCadastro, setNomeCadastro] = useState("")
  const [emailCadastro, setEmailCadastro] = useState("")

  const [users, setUseres] = useState("")


  return (
    <div>
      <TelaDeCastro></TelaDeCastro>
    </div>
    
  );
}

export default App;
