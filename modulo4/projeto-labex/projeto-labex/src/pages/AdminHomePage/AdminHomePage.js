import React from "react"
import { useNavigate } from "react-router-dom"
import { useRequestsData } from "../../hooks/useRequestData"

export function AdminHomePag () {
    const navigate = useNavigate()
    const [data, isLoading, error] = useRequestsData("/trips")

    const listTrips = data && data.map((trip)=>{
        return (     
            <div  key={trip.id}>
                 <div>
                     <p> {trip.name}</p>
                     
               </div>
            </div>      
        )
    })

    return(
        <>
            <h1>Painel Administrativo</h1>

            <section>
                <button > Voltar</button>
                <button> Criar Viagem</button>
                <button>Logout</button>
            </section>

            <div>
                {!isLoading  && <p> Carreango viagens</p>}
                {!isLoading && error && (<p>Ocorreu um erro</p>)}
                {isLoading && data && data.length > 0 && (listTrips)}
            </div>
        </>
    )


}