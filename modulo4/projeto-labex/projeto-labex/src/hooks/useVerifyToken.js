import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {goToAdminHomePag} from '../routes/coordinator'

export const useVerifyToken = () =>{
    const navigate = useNavigate()
    const token = window.localStorage.getItem('token')
    
    useEffect(() =>{
        
        if(token != null) {
            goToAdminHomePag(navigate)
        }
    
    
    }, [])

}