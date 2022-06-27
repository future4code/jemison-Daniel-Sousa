import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardMedio from './components/CardMedio/CarMedio';
import logo from './img/perfil.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={logo} 
          nome="Daniel Da Silva De Sousa" 
          descricao="Oi, Daniel Sousa. Sou estudante de Desenvolvimento Full Stack na Labenu e graduando em Analise e Desenvolvimento de Sistemas pelo Cruzeiro do Sul. Uma amante de desenvolvimento Web, você está diante de uma de um Dev em construção que vai abalar o mercado Front-end."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-contato'>
        <CardMedio
          imagem ="https://img.icons8.com/external-flat-icons-inmotus-design/67/000000/external-email-mail-box-flat-icons-inmotus-design-4.png"
          titulo = "Email:"
          descricao ="daniellsousa0614@gamil.com"
        />
        <CardMedio
          imagem ="https://img.icons8.com/ios-filled/50/000000/order-delivered.png"
          titulo = "Endereço:"
          descricao ="Rua das flores, Centro - Timbiras-Ma"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://img.icons8.com/officel/100/000000/school-director-male-skin-type-3.png" 
          nome="Diretor Administrativo" 
          descricao="Atualemente trabalho como diretor administrativo de uma empresa em minha cidade!" 
        />
        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
