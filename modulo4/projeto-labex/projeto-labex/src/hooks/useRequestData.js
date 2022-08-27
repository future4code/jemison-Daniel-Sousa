import { useEffect, useState } from "react";
import {BASE_URL} from "../constants/urls"
import axios from "axios";




export const useRequestsData = (endpoint, initialState) =>{
   
    const [data, setData] = useState(initialState) // testar undefined
    
    const getRequestsData = () =>{
        const header = {
            headers: {
                auth: localStorage.getItem("token")
            }
        };
        axios.get(`${BASE_URL}/${endpoint}`, header)
        .then((response) =>{
            setData(response.data)
        })
        .catch((error) =>{
            alert("erro na requição")
        })
    }

    useEffect(() =>{
        getRequestsData()
    }, [endpoint])

    return [data, getRequestsData]

}//endpoit é a chamadata para cada url que desejo usar