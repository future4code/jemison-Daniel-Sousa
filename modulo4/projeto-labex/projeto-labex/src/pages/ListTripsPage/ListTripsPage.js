import { useNavigate } from "react-router-dom"
import { useRequesteData } from "../../hooks/useRequestData"

export function ListTripsPage () {

    const [tripsData] = useRequesteData("/trips")
    const navigate = useNavigate()

    const listTrips = tripsData.trips && tripsData.trips.map((trip) =>{
        return (
            <div key={trip.id} trip ={trip}>

            </div>
        )
    })

    return (
        <>
            <p> List Trips Page</p>

            <div>
                {listTrips}
               
            </div>
        </>
    )
}