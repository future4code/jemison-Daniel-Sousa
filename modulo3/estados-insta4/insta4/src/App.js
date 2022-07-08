import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    //screen reader only
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  input {
    padding: 10px 5px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    width: 20%;
  }

  button {
    border: none;
    border-radius: 10px;
    padding: 10px;
    background-color: lightsalmon;
  }

  button:hover {
    cursor: pointer;
    color: white;
  }
`


function App() {
  const [novoUsuario, setNovoUsuario]= useState("")
  const [novaFotoUsuario, setNovaFotoUsuario] = useState('https://picsum.photos/05/50')
  const [postNovo, setPostNovo] = useState('https://picsum.photos/210/150')

  const [novaPostagem, setNovaPostagem] = useState([
    {
      nomeUsuario: "Paulinha",
      fotoUsuario: 'https://picsum.photos/30/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
  
     {
        nomeUsuario: "Daniel Sousa",
         fotoUsuario:'https://picsum.photos/20/50',
         fotoPost: 'https://picsum.photos/180/150'
     },
  
       {
        nomeUsuario: "Andreane Cardoso",
        fotoUsuario: 'https://picsum.photos/90/50',
        fotoPost:'https://picsum.photos/210/150'
      },
  
  ])

  const handleNomeUsuario = (e) =>{
    setNovoUsuario(e.target.value)
  }

  const handleNovaFoto =(e) =>{
    setNovaFotoUsuario(e.target.value)
  }

  const handleNovoPost =(e) =>{
    setPostNovo(e.target.value)
  }
  
  const addNovoPost =(e) =>{
    e.preventDefault();

    const novoPos = {
      nomeUsuario:novoUsuario, 
      fotoUsuario:novaFotoUsuario , 
      fotoPost:postNovo }

    const novaListaNovaPost = [...novaPostagem, novoPos];
    setNovaPostagem(novaListaNovaPost)

    setNovoUsuario("");
    setNovaFotoUsuario('https://picsum.photos/05/50');
    setPostNovo('https://picsum.photos/210/150');
  }


  const informacoesLista = novaPostagem.map((usuario, index) =>{
    
    return (
      <Post key={index}
        nomeUsuario = {usuario.nomeUsuario}
        fotoUsuario = {usuario.fotoUsuario}
        fotoPost = {usuario.fotoPost}
      />
    )
  })

return(
  <MainContainer>
        <Form>
          <label>Nome:</label>
          <input 
            placeholder='Insira seu nome'
            value={novoUsuario}
            onChange={handleNomeUsuario}
          />

          <label>Foto:</label>

          <input
            placeholder='Insira sua foto'
            value={novaFotoUsuario}
             onChange={handleNovaFoto}
          />

          <label>Novo Post</label>

          <input 
            placeholder='Novo Post'
            value={postNovo}
            onChange={handleNovoPost}
          /> 
           <button onClick={addNovoPost}>Adcionar</button> 
        </Form>
        {informacoesLista} 
   </MainContainer>
)

}


export default App;
