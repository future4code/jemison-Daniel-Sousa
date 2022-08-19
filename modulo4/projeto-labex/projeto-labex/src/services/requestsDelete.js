import axios from "axios"

import {BASE_URL} from "../constants/urls"

export const deleteTrip = (idTrip, functionGetTrips) =>{
    axios.delete(`${BASE_URL}/trips/${idTrip}`, {
        headers:{
            auth: localStorage.getItem("token")
        }
    }).then((response)=>{
        alert("Sucesso! Viagem deletada")
        functionGetTrips()
    }).catch((error) => {
        alert("Erro! Tente novamente")
    })

}