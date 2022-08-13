import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import { useRequestsData } from "../../hooks/useRequestData"
import {goToHome, gotoApplicationFormPage} from "../../routes/coordinator"


import {MasterBox, MainCard, Card , ButtonsSection } from "./Styled"



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
            <ButtonsSection>
                <button onClick={()=>goToHome(navigate)}> Voltar</button>
                <button onClick={()=> gotoApplicationFormPage(navigate)}>        Inscrever-se
                </button>
            </ButtonsSection>
            <MainCard>
                {!isLoading  && <p> Carreango viagens</p>}
                {!isLoading && error && (<p>Ocorreu um erro</p>)}
                {isLoading && data && data.length > 0 && (listTrips)}
                
            </MainCard>
        </MasterBox>
    )
}