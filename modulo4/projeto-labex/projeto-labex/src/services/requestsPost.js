import axios from "axios"

import {BASE_URL} from "../constants/urls"
import { goToAdminHomePag, goToLoginPage } from "../routes/coordinator"



export const applyToTrip = (body, id, functionClear) =>{
    axios.post(`${BASE_URL}/trips/${id}/apply`, body)
    .then((response) =>{
        alert("Sucesso! Aplicação enviada com sucesso")
        functionClear()
    }).catch((error) =>{
        alert("Error! Tente novamente")
    })
}

export const login = (email, password, navigate) =>{
    console.log(email,password);
   const body = {
         email: email, 
         password: password
   }
   axios.post(`${BASE_URL}/login`, body)
   .then((response) =>{
        localStorage.setItem("token",response.data.token)
        alert("Login realizado com sucesso")
        goToAdminHomePag(navigate)
        
   }).catch((error)=>{
        alert("Senha ou usuário inválido! ")
   })
}




export const lagout = (navigate) =>{
    localStorage.removeItem("token")
    goToLoginPage(navigate)
}// função desloga usuario