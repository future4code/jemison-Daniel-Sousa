import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import {goToLoginPage} from "../routes/coordinator"

export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        const tokem = localStorage.getItem("tokem")
        if(tokem !== null){
            alert("Não está logado")
            goToLoginPage(navigate)
        }
    },[])
    
}

// Para usarmos nas paginas com autenticação 