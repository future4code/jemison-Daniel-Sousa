import axios from "axios"

import {BASE_URL} from "../constants/urls"

export const candidateDecision = (IdTrip, idCandidate, boolean, getTripDetail) =>{
    const header ={
        headers: {
            auth: localStorage.getItem("token")
        }
    };

    const body = {
        approve: boolean
    }

    axios.put(`${BASE_URL}/trips/${IdTrip}/candidates/${idCandidate}/decide`, body, header)
        .then((response) =>{
            boolean ? alert("Candidado aceito na viagem") : alert("Candidato reprovado com sucesso!")

            getTripDetail()
        }).catch((error) =>{
            alert("Algo deu errado! Tente novamente mais tarde")
        })
}