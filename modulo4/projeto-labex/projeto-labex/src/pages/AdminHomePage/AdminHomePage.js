import React from "react"
import { useNavigate } from "react-router-dom"
import { useRequestsData } from "../../hooks/useRequestData"
import { useProtectedPage } from "../../hooks/useProtectedPage"
export function AdminHomePag () {
    useProtectedPage()
    const navigate = useNavigate()
    


    return(
        <>
            <h1>Painel Administrativo</h1>

            <section>
                <button > Voltar</button>
                <button> Criar Viagem</button>
                <button>Logout</button>
            </section>

            <div>
               
            </div>
        </>
    )


}