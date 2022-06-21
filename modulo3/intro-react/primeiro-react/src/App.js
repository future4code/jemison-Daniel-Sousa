import logoPerfil from './img/logo_site.png';
import './App.css';

function App() {
  const titulo = `Olá! seja bem-vindo(a) a minha primeira aplicação em React`;
  
  const nome = `Daniel`

  const saudacao = () =>{
    alert(`Olá meu nome é ${nome}, seja bem-vindo(a)!`)
  }

  return (
    <div className="AppDaniel">
      <h1 className='titulo-principal'>{titulo}</h1>
      <img src={logoPerfil} className='logo-perfil' alt='Logo do meu perfil'/>

      <p className='text-saudacao'> Essa é minha primeira aplicação e contato com React, grave meu nome, vou ser um excelente Dev!</p>

      <button className='botao-saudacao' onClick={saudacao}> Clique aqui, Cidadão!</button>
    </div>
  );
}

export default App;
