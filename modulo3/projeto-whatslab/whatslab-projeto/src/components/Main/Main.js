import { useState } from 'react'
import styled from 'styled-components';
import {Sidebar,ContinerPrincipal,ConteudoPrincipal, } from './StyleMain'


const Card = styled.section`
  color: black;
  display: flex;
  
  width: 20%;
  padding: 10px;
  border: 1px solid #000000;
  border-radius:10%;
  

  .destinatario{

    font-weight: bolder;
  }
  .conteudo_mensagem{
    color: white;
  }
  
`
const Form = styled.form `
  display: flex;
  padding:10px;
  gap: 10px;

  .input_destinatario{
    width: 15vw;
    height:5vh;
  }

  .input_mensagem{
    width: 45vw;
    height:5vh;
  }

  .botao_enviar{
    width:10vw;

  }

  .botao_enviar:hover{
    background-color: white;
    color: black;
    font-size: 1.2rem;
    cursor: pointer;
  }

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
                <p className='destinatario'>{elemento.destinatario}: 
                    <span className='conteudo_mensagem'>{elemento.conteudo}</span>
                
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
            <Sidebar></Sidebar>
            
            <ConteudoPrincipal>
                {bolaoMensagem}
                <Form >
                    <input className='input_destinatario'
                        placeholder='Destinatario..'
                        value={novoDestinatario}
                        onChange={handleDestinatario}
                    />

                    <input className='input_mensagem'
                        placeholder='Digite sua mensagem...'
                        value={novaConversa}
                        onChange={handleMensagem}
                    />

                    <button className='botao_enviar' onClick={addNovaMensagem}>Enviar</button>
                </Form>

                
            </ConteudoPrincipal>
        </ContinerPrincipal>
    )
}