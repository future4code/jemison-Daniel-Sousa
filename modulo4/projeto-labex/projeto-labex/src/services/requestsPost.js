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

export const login = (body, navigate) =>{
    axios.post(`${BASE_URL}/login`, body)
    .then((response) =>{
        localStorage.setItem("token", response.data.token)
        goToAdminHomePag(navigate)
    }).catch((error) =>{
        alert(error.response.data.message)
    })
}


export const createTrip = (body, functionClear) =>{
    axios.post(`${BASE_URL}/trips`, body, {
        headers: {
            auth: localStorage.getItem("token")
        }
    }).then((response) =>{
        alert("Sucesso! Sua viagem foi adcionada")
        functionClear()
    }).catch((error) =>{
        alert("Erro! Tente novamente")
    })
}

export const lagout = (navigate) =>{
    localStorage.removeItem("token")
    goToLoginPage(navigate)
}// função desloga usuario