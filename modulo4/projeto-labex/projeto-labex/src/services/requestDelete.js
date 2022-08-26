import axios from "axios"
import {BASE_URL} from "../constants/urls"

export const deleteTrip = (tripId, getTripsData) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    axios
    .delete(`${BASE_URL}/trips/${tripId}`,header)
    .then(() => {
        alert("Viagem removida com sucesso!")
        getTripsData()
    })
    .catch((err) => {
        alert(err.message)
    })
}