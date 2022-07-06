import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App() {

  const listaPost = [
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
  
    {
      nomeUsuario:"Marlene Cavalcante",
      fotoUsuario: 'https://picsum.photos/85/50',
      fotoPost: 'https://picsum.photos/215/150'
  
    }
  ];
  
  const informacoesLista = listaPost.map((usuario, index) =>{
    return(
      <Post key={index}
        nomeUsuario = {usuario.nomeUsuario}
        fotoUsuario = {usuario.fotoUsuario}
        fotoPost = {usuario.fotoPost}
      />
    )
  })
return(
  <MainContainer>
        {informacoesLista} 
   </MainContainer>
)

}


export default App;
