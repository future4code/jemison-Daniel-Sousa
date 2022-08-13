import axios from "axios";
import { useEffect, useState } from "react";

import {BASE_URL} from "../constants/urls"

export function useRequestPost () {

    const [dataPost, setDataPost] = useState([]) // testar undefined
    const [isLoading, setIsLoading] = useState (false)
    const [error, setError]=useState("")

    useEffect(() =>{
        


    }, [])


    return[]
}