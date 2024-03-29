import axios from "axios";
import React, { useState, useEffect} from "react";

import {ConteinerUsuarios, ConteinerPrincipal, FormularioCadastro } from './StyleDeCadastro'


export function TelaDeCastro () {
    const [listaUsuarios, setListaUsuarios] = useState([])

    const [nomeCadastro, setNomeCadastro] = useState("")
    const [emailCadastro, setEmailCadastro] = useState("")

    //handleNomeCadastro

    const handleNomeCadastro = (e) =>{
        setNomeCadastro(e.target.value)
    }

    const handleEmailCadastro = (e) =>{
        setEmailCadastro(e.target.value)
    }


    const allListaDeUsuarios = listaUsuarios.map ((usuarios, index) =>{
        
        return (
            
                <div key={index}>
                    <li>
                        {usuarios.name}
                    </li>
                    
                </div>
                
            
        )
    })

    useEffect(() =>{
        getAllUsers()
    })

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const serviceHeaders = {
            headers: {
                Authorization: 'daniel-sousa-jemison'
            }
        }

    const getAllUsers = () =>{
        axios.get(url , serviceHeaders)
        .then((response) => { setListaUsuarios(response.data) })
        .catch((error) => { console.log(error.response)})
    }

    const body = {
        "name": nomeCadastro,
        "email": emailCadastro,
    }

    const postCadastroUsuarios = (e) =>{
        e.preventDefault();

        axios.post(url, body, serviceHeaders)
        .then((response) =>{
            alert("Usuario Cadastrado com sucesso")
            getAllUsers()
        }).catch((error) =>{
            alert(" Erro ao cadastrar! Tente novamete")
        })

        setNomeCadastro("")
        setEmailCadastro("")
    }

    const deletarUsuarios = (e) => {

        e.preventDefault();

       const deletarUsuario = listaUsuarios.filter((usuarios) => usuarios.id === nomeCadastro)

       axios.delete(url + "/" + deletarUsuario[0].id, serviceHeaders)

       .then((response)=>{
            alert("Usuario Deletado com sucesso")
            getAllUsers();
       }).catch((error)=>{
            alert("Algo Deu errado. Tende novamente")
       })
      
    } 
       


    return (

        <ConteinerPrincipal>
            <ConteinerUsuarios>
                {allListaDeUsuarios}  
            </ConteinerUsuarios>

            <FormularioCadastro>
                
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

                <button onClick={postCadastroUsuarios}> Cadastrar Usuario</button>

                
            </FormularioCadastro>

           
        </ConteinerPrincipal>
        
    )



}