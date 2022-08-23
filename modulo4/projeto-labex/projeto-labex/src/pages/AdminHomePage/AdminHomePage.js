import React from "react"
import { useNavigate } from "react-router-dom"
import { useRequestsData } from "../../hooks/useRequestData"
import {goUut, goToCreateTripPage, } from "../../routes/coordinator"
import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button , CarTrip,SectionTrip  } from "./Styled"

export function AdminHomePag () {
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
                        <h1> Painel Administrativo</h1>
                        <ButtonBox>
                            <Button onClick={() => goUut(navigate)}> Voltar</Button>

                            <Button onClick={() => goToCreateTripPage(navigate)}> Criar Viagem
                            </Button>

                            <Button> Logout</Button>
                        </ButtonBox>

                        <SectionTrip >
                            { listTrips}
                        </SectionTrip>
                     
                        
                        
                    </MainBox> 
                    <Footer/> 
                </ContainerItens>    
            </Container>    
        </MasterBox>
    )
}