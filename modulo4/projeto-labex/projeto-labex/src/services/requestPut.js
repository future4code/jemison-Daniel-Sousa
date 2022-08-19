import axios from "axios"

import {BASE_URL} from "../constants/urls"

export const decideCandidadte = (tripId, candidateId, decision ) =>{
    const body ={
        approve: decision
    }

    axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
        headers: {
            auth: localStorage.getItem("token")
        }
    }).then((response) =>{
        alert("Aprovado")
    }).catch((error) =>{
        alert("Algo deu errado")
    })
    
};