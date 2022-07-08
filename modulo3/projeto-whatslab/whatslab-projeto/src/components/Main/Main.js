import { useState } from 'react'
import {Sidebar,ContinerPrincipal,ConteudoPrincipal, } from './StyleMain'



export function Main (){
    const [destinatario, setDestinatario] = useState("");
    const [mensagem, setMensagem] = useState("")
    const [novaMensagem, setNovaMensagem] = useState([
        {
            nome: "",
            mensagem: "",
        }

    ]);
      
    const handleDestinatario = (e) =>{
        setDestinatario(e.target.value)
    }
    
    const handleMensagem = (e) =>{
        setMensagem(e.target.value)
    }


    const newMensagem =() =>{
        return(
            <div key={index}>
                <p></p>
            </div>

        )
    }

    return (
        <ContinerPrincipal>
            <Sidebar> Sidebar</Sidebar>
            
            <ConteudoPrincipal>
                <form>
                    <label>Destinatatio</label>
                    <input
                        placeholder='Destinatario..'
                        value={destinatario}
                        onChange={handleDestinatario}
                    />

                    <input
                        placeholder='Digite sua mensagem...'
                        value={mensagem}
                        onChange={handleMensagem}
                    />

                    <button>Enviar</button>
                </form>

                
            </ConteudoPrincipal>
        </ContinerPrincipal>
    )
}