import axios from "axios"

import {BASE_URL} from "../constants/urls"
import { goToAdminHomePag, goToLoginPage } from "../routes/coordinator"


export const sendApplication = (body, id, clear) => {

    axios
      .post(`${BASE_URL}/trips/${id}/apply`, body)
      .then((response) => {
        alert("Aplicação enviada com sucesso!");

        clear();
      })
      .catch((err) => {
        alert("Erro!");
      });

};



export const createTrip = () =>{
  const header = {
    headers: {
      auth: localStorage.getItem("token")
    }
  }




}







export const lagout = (navigate) =>{
    localStorage.removeItem("token")
    goToLoginPage(navigate)
}// função desloga usuario