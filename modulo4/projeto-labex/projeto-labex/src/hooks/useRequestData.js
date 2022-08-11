import { useEffect, useState } from "react";
import {BASE_URL} from "../constants/urls"
import axios from "axios";




export const useRequestsData = (endpoint) =>{
   
    const [data, setData] = useState([]) // testar undefined
    const [isLoading, setIsLoading] = useState (false)
    const [error, setError]=useState("")

    useEffect(()=>{
        setIsLoading(true);
        axios.get(`${BASE_URL}${endpoint}`)
        .then((response)=>{
            setIsLoading(true)
            setData(response.data.trips)
        }).catch((error)=>{
            setIsLoading(false);
            setError(error.data)
        })
    },[data])

    return [data, isLoading, error]
}//endpoit é a chamadata para cada url que desejo usar