import { useNavigate } from "react-router-dom"
import {BASE_URL} from "../../constants/urls"
import { useRequestsData } from "../../hooks/useRequestData"

export function ListTripsPage () {
    const [tripsData] = useRequestsData("/trips", {})
    const navigate = useNavigate()

    const tripsList = tripsData.trips && tripsData.trips.map((trip) => {
        return <p key={trip.id} trip={trip} />
    })
    
    return (
        <>
            <p> Lista aqui</p>

            <div>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>} 
            
              
               
            </div>
        </>
    )
}