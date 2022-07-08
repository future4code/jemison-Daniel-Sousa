import { useState } from 'react'
import styled from 'styled-components';
import {Sidebar,ContinerPrincipal,ConteudoPrincipal, } from './StyleMain'


const Card = styled.section`
    color: black;
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 10px;
`

export function Main (){
    const [destinatario, setDestinatario] = useState("");
    const [mensagem, setMensagem] = useState("")
    const [novaMensagem, setNovaMensagem] = useState([""
    ]);
      
    const handleDestinatario = (e) =>{
        setDestinatario(e.target.value)
    }
    
    const handleMensagem = (e) =>{
        setMensagem(e.target.value)
    }

    // const addNovaMensagem = (e) =>{
    //     e.preventDefault();

    //     const mensagem = {nome:destinatario, mensagem:mensagem}
    //     const novaListaMensagem = [...novaMensagem, mensagem];
    //     setNovaMensagem(novaListaMensagem)

    //     setDestinatario("");
    //     setMensagem("");

    // }

    const bolaoMensagem = novaMensagem.map((elemento, index) =>{
      
        const addNovaMensagem = (e) =>{
            e.preventDefault();
    
            const mensagem = {nome:destinatario, mensagem:mensagem}
            const novaListaMensagem = [...novaMensagem, mensagem];
            setNovaMensagem(novaListaMensagem)
    
            setDestinatario("");
            setMensagem("");
    
        }

        return(
            <Card key ={index}>
                <p> {elemento.nome}</p>
                <span>{elemento.mensagem}</span>
            </Card>
        )


    })

    return (
        <ContinerPrincipal>
            <Sidebar> Sidebar</Sidebar>
            
            <ConteudoPrincipal>
             {bolaoMensagem}

                <form>
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

                    <button onClick={bolaoMensagem}>Enviar</button>
                </form>

                
            </ConteudoPrincipal>
        </ContinerPrincipal>
    )
}