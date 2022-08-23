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


export const lagout = (navigate) =>{
    localStorage.removeItem("token")
    goToLoginPage(navigate)
}// função desloga usuario