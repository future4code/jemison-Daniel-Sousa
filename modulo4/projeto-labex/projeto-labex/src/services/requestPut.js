import axios from "axios"

import {BASE_URL} from "../constants/urls"

export const decideCandidate = (idCandidate, idTrip, booleano, functionGetTrips) =>
{
    const body ={
        approve: booleano
    }

    axios.put(`${BASE_URL}/trips/${idTrip}/candidates/${idCandidate}/decide`, body, {
        headers:{
            auth: localStorage.getItem('token')
        }
    }).then((response)=>{
        alert("Sucesso! Decisão registrada")
        functionGetTrips()
    }).catch((error) =>{
        alert("Error! Tente novamente")
    })



}