import { useNavigate } from "react-router-dom"
import { useRequestsData } from "../../hooks/useRequestData"

export function ListTripsPage () {
    const navigate = useNavigate()
    const [data, isLoading, error] = useRequestsData("/trips")

    const listTrips = data && data.map((trip)=>{
        return (     
            <div key={trip.id}>
                 <div>
                     <p> {trip.name}</p>
                     <p> {trip.planet}</p>
                     <p> {trip.date}</p>
               </div>
            </div>      
        )
    })

    return (
        <>
            <p> Lista aqui</p>

            <div>
            
                {!isLoading  && <p> Carreango viagens</p>}
                {!isLoading && error && (<p>Ocorreu um erro</p>)}
                {isLoading && data && data.length > 0 && (listTrips)}
                
            </div>
        </>
    )
}