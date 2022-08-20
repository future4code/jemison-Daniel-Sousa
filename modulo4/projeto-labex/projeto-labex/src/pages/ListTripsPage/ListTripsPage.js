import { useNavigate } from "react-router-dom"
import { useRequestsData } from "../../hooks/useRequestData"
import {goToHome, gotoApplicationFormPage} from "../../routes/coordinator"

import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"

import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button , CarTrip,SectionTrip  } from "./Styled"



export function ListTripsPage () {
    const navigate = useNavigate()
   
    const [data] = useRequestsData ("trips", {})

    const listTrips = data.trips ? data.trips.map((trip) =>{
        return (
            <CarTrip >
                <p><span>Nome:</span>{trip.name}</p>
                <p><span>Descrição:</span>{trip.description}</p>
                <p><span>Planeta:</span>{trip.planet}</p>
                <p><span>Duração:</span>{trip.durationInDays}</p>
                <p><span>Data:</span>{trip.date}</p>   
            </CarTrip>
        )
    }) : (<p>Carregando</p>);

    return (
        <MasterBox>
            <Container>
                <ContainerItens>
                    <Header />
                    <MainBox>
                        <h1> Viagens Disponiveis</h1>
                        <SectionTrip >
                            { listTrips}
                        </SectionTrip>
                     
                        <ButtonBox>
                            <Button onClick={()=>goToHome(navigate)}> Voltar</Button>
                            <Button onClick={()=> gotoApplicationFormPage(navigate)}>        Inscrever-se
                            </Button>
                        </ButtonBox>
                        
                    </MainBox> 
                    <Footer/> 
                </ContainerItens>    
            </Container>    
        </MasterBox>
    )
}