import { useEffect, useState } from "react";
import axios from "axios";
import {BASE_URL} from "../constants/urls"



export const useRequesteData = (endpoint) =>{
    const [data, setData] = useState (undefined)
    

    useEffect(()=>{
        
        axios.get(`${BASE_URL}${endpoint}`, {
            headers:{
                auth: localStorage.getItem("token")
            }
        }).then((response) => setData(response.data))
        .catch((error) => alert("Error"))
    }, [endpoint])



    return [data]
}//endpoit é a chamadata para cada url que desejo usar