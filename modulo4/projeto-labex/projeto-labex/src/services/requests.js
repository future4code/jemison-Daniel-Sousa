import axios from "axios"

import {BASE_URL} from "../constants/urls"



export const applyToTrip = (body, id) =>{
    axios.post(`${BASE_URL}/trips/${id}/apply`, body)
    .then((response) =>{
        alert("Sucesso!")
    }).catch((error) =>{
        alert(error.response.message)
    })
}

export const login = (body, navigate) =>{
    axios.post(`${BASE_URL}/login`, body)
    .then((response) =>{
        localStorage.setItem("token", response.data.token)
        //chamar função navigate
    }).catch((error) =>{
        alert(error.response.data.message)
    })
}