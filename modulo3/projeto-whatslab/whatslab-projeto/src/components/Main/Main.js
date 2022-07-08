import { useState } from 'react'
import styled from 'styled-components';
import {Sidebar,ContinerPrincipal,ConteudoPrincipal, } from './StyleMain'


const Card = styled.section`
    color: black;
  display: flex;
  width: 20%;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 10px;

  .destinatario{
    font-weight: bolder;
  }
  span{
    color: white;
  }
  
`

 const Form = styled.form `
 
 
 
 
 `

export function Main (){
    const [novoDestinatario, setNovoDestinatario] = useState("");
    const [novaConversa, setNovaConversa] = useState("")
    const [novaMensagem, setNovaMensagem] = useState([
        {
            destinatario: String,
            conteudo: String,
        }

    ]);
      
    const handleDestinatario = (e) =>{
        setNovoDestinatario(e.target.value)
    }
    
    const handleMensagem = (e) =>{
        setNovaConversa(e.target.value)
    }

    const bolaoMensagem = novaMensagem.map((elemento, index) =>{
      
      
        return(
            <Card key ={index}>
                <p className='destinatario'>{elemento.destinatario} : 
                    <span>{elemento.conteudo}</span>
                
                </p>
                
            </Card>
        )


    })

    const addNovaMensagem = (e) =>{
        e.preventDefault();
  
           const mensagem = {
             destinatario: novoDestinatario ,
             conteudo: novaConversa,
          }
           const novaListaMensagem = [...novaMensagem, mensagem];
            setNovaMensagem(novaListaMensagem)
  
       setNovoDestinatario("");
       setNovaConversa("");
   }


    return (
        <ContinerPrincipal>
            <Sidebar> Sidebar</Sidebar>
            
            <ConteudoPrincipal>
             
                {bolaoMensagem}
                <Form>
                    <input
                        placeholder='Destinatario..'
                        value={novoDestinatario}
                        onChange={handleDestinatario}
                    />

                    <input
                        placeholder='Digite sua mensagem...'
                        value={novaConversa}
                        onChange={handleMensagem}
                    />

                    <button onClick={addNovaMensagem}>Enviar</button>
                </Form>

                
            </ConteudoPrincipal>
        </ContinerPrincipal>
    )
}