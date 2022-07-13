import { useState } from "react";
import {Etapa1} from "./Components/Etapa1/Etapa1"
import {Etapa2} from "./Components/Etapa2/Etapa2"
import {Etapa3} from "./Components/Etapa3/Etapa3"
import {Final} from "./Components/Final/Final"

function App() {
  const [etapa, setEtapa] = useState()


  
 
  return (
    <>

        <Etapa1></Etapa1>
        <button> Proxima Etapa</button>
        
     </>
  );
}

export default App;
