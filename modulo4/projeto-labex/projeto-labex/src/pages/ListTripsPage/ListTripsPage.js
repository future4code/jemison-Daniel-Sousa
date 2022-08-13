import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import { useRequestsData } from "../../hooks/useRequestData"

import {MasterBox, MainCard, Card } from "./Styled"



export function ListTripsPage () {
    const navigate = useNavigate()
    const [data, isLoading, error] = useRequestsData("/trips")

    const listTrips = data && data.map((trip)=>{
        return (     
            <Card  key={trip.id}>
                 <div>
                     <p> {trip.name}</p>
                     <p> {trip.description}</p>
                     <p> {trip.planet}</p>
                     <p> {trip.durationInDays}</p>
                     <p> {trip.date}</p>
               </div>
            </Card>      
        )
    })

    return (
        <MasterBox>
            <Header/>
            <h1> Lista aqui</h1>
            <MainCard>
                {!isLoading  && <p> Carreango viagens</p>}
                {!isLoading && error && (<p>Ocorreu um erro</p>)}
                {isLoading && data && data.length > 0 && (listTrips)}
                
            </MainCard>
        </MasterBox>
    )
}