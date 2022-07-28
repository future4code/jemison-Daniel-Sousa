import axios, { Axios } from "axios";
import { useState, useEffect} from "react";


export function TelaDeCastro () {
  const [nomeCadastro, setNomeCadastro] = useState("")
  const [emailCadastro, setEmailCadastro] = useState("")

  const [users, setUseres] = useState([ 
]) // 1


  //NomeCadastro
  const handleNomeCadastro = (e) =>{
    setNomeCadastro(e.target.value)
  }

  //emailCadastro

  const handleEmailCadastro = (e) =>{
    setEmailCadastro(e.target.value)
  }

  // 2
  const mapeaUseres = users.map((item, index) => {
    return(
        <li key={index}>
            {item.name}
        </li>
    )
  })


  useEffect(() => {
    getAllUsers()
}, [])

  // 3

  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

  const serviceHeaders = {
        headers: {
            Authorization: 'daniel-sousa-jemison'
        }
    }

     //4
    

    const getAllUsers = () =>{
        axios.get(url, serviceHeaders)
        .then((response) => {
            setUseres(response.data.result.list)
        }).catch((error)=> {
            console.log(error.response)
        })
    }

    const body = {
        
            "name": nomeCadastro,
            "email": emailCadastro,
        
    }


    // Requisição POST CreateUser

    const postCreateUser = (e) =>{
        e.preventDefault();

        axios.post(url, body, serviceHeaders)
        .then((response) =>{
            alert("Usuario Cadastrado com Sucesso!")
            getAllUsers()
        }).catch((error)=>{
            alert("Tente novamente :(")
        })

        setNomeCadastro("");
        setEmailCadastro("")

    }






    return (

        <div>
            <lu>
                {mapeaUseres}
            </lu>
                
            
            <form>
                
                <input
                    
                    type= "text"
                    placeholder="Digite seu nome"
                    value={nomeCadastro}
                    onChange ={handleNomeCadastro}
                />

                <input
                    
                    type= "text"
                    placeholder="Digite seu e-mail"
                    value={emailCadastro}
                    onChange ={handleEmailCadastro}
                />

                <button onClick={postCreateUser}> Cadastrar Usuario</button>
            </form>
        </div>
        
    )



}