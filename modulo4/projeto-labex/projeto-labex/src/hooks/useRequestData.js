import { useEffect, useState } from "react";
import {BASE_URL} from "../constants/urls"
import axios from "axios";




export const useRequestsData = (endpoint, initialState) =>{
    const [data, setData] = useState(initialState)

    const getData = () => {
        axios.get(`${BASE_URL}${endpoint}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((res) => setData(res.data))
        .catch((err) => alert(err.response.data.message))
    }// o endpoint é a url que vai mudar! ao chamar a requisição 
    // da pra usar o useEffect direto logo

    useEffect(() => {
        getData()
    }, [endpoint])

    return [data, getData]
}//endpoit é a chamadata para cada url que desejo usar