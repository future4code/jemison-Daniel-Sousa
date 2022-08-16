import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


export function useProtectedPage () {
    const navigate = useNavigate()

    useEffect(()=>{
        const tokem = localStorage.getItem("tokem")
        if(tokem === null){
            alert("Não está logado")
        }
    },[navigate])
    
}