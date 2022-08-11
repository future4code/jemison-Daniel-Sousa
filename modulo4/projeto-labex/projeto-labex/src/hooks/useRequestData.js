import { useEffect, useState } from "react";
import {BASE_URL} from "../constants/urls"
import axios from "axios";




export const useRequestsData = (endpoint, initialState) =>{
   

    const [data, setData] = useState(initialState)

    const getData = () => {
        axios.get(`${BASE_URL}${endpoint}`)
        .then((response) => setData(response.data))
        .catch((error) => alert(error))
    }

    useEffect(() => {
        getData()
    }, [endpoint])

    return [data, getData]
}//endpoit é a chamadata para cada url que desejo usar