import { useState } from "react";
import { TelaDeCastro } from "./components/TelaDeCadastro/TelaDeCadastro";


function App() {
  const [nomeCadastro, setNomeCadastro] = useState("")
  const [emailCadastro, setEmailCadastro] = useState("")

  const [users, setUseres] = useState([]) // 1


  // 2
  const mapeaUseres = users.map((usuarios, index)=> {

    return (
      <div>
          {usuarios.name}
      </div>
    )
  })

  // 3

  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

  const serviceHeaders = {
    headers: {
        Authorization: 'daniel-sousa-jemison'
    }
}


  return (
    <div>
      <TelaDeCastro></TelaDeCastro>
    </div>
    
  );
}

export default App;
