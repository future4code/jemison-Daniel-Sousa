import { useState } from 'react'
import styled from 'styled-components';
import {Sidebar,ContinerPrincipal,ConteudoPrincipal, } from './StyleMain'


const Card = styled.section`
  color: black;
  display: flex;
  align-items:center;
  width: 30vw;
  height:4vh;
  gap: 5px;

  .destinatario{

    font-weight: bolder;
    font-size:1.3rem;
    margin-right:10px;
  }
  .conteudo_mensagem{
    color: orange;
    font-size:1.2rem;
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
                <p className='destinatario'>{elemento.destinatario} :</p>
                <span className='conteudo_mensagem'>{elemento.conteudo}</span>
                
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
            <Sidebar></Sidebar>
        </ContinerPrincipal>
    )
}