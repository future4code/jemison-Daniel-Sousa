import axios from "axios"

import {BASE_URL} from "../constants/urls"

export const decideCandidate = (id, candidateId, decision, getTripsDetail) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    };

    const body = {
        approve: decision
    };

    axios.put(`${BASE_URL}/trips/${id}/candidates/${candidateId}/decide`,
        body,
        header
    )
        .then(() => {
         
            decision ?
            window.confirm("Deseja realmente Aprovar esse candidato?")
            : window.confirm("Deseja realmente excluir esse candidato?")

            getTripsDetail();
        })
        .catch((err) => {
            alert(err.message);
        });
};
