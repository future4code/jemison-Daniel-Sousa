import axios from "axios";
import { useEffect, useState } from "react";

import {BASE_URL} from "../constants/urls"

export function useRequestPost (endpoint, body, token) {

    const [dataPost, setDataPost] = useState([]) // testar undefined
    const [isLoading, setIsLoading] = useState (false) //testar mudança de estado incial caso não funcione
    const [error, setError]=useState("")

    useEffect(() =>{
        isLoading(true);
        axios.post(`${BASE_URL}${endpoint}`, body, {
            headers:{
                auth: token
            }
        } )
        .then((response)=>{
            setIsLoading(false)
            setDataPost(response.data)
        }).catch((error)=>{
            setIsLoading(false);
            setError(error.data)
        })

    }, []) // verificar/testar os estados iniciais e a logica de isLoading, se não estiver funcionando


    return[dataPost, error, isLoading]
}