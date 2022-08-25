import React from "react"
import { ImBin } from "react-icons/im";
import { useNavigate } from "react-router-dom"
import { useRequestsData } from "../../hooks/useRequestData"
import {goUut, goToCreateTripPage,goToTripDetailsPage } from "../../routes/coordinator"
import {lagout} from "../../services/requestsPost"
import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button , CarTrip,SectionTrip, ButtonBoxCard, ButtonCard } from "./Styled"

export function AdminHomePag () {
    
    const navigate = useNavigate()
    
    const getId = (id) =>{
        navigate(`/admin/trips/${id}`)
    }



    const [data] = useRequestsData ("trips", {})

    const listTrips = data.trips ? data.trips.map((trip) =>{
        return (
            <CarTrip onClick={()=>getId(trip.id)}>
                <p><span>Viagem:</span>{trip.name}</p>
                <ButtonBoxCard>
                    <ButtonCard> Ver detalhes</ButtonCard>
                    <ImBin size={25} color= "red" />
                </ButtonBoxCard>
                
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

                            <Button onClick={()=> lagout(navigate)}> Logout</Button>
                        </ButtonBox>

                        <SectionTrip >
                            <h2>Lista de Viagens</h2>
                            { listTrips}
                        </SectionTrip>
                     
                        
                        
                    </MainBox> 
                    <Footer/> 
                </ContainerItens>    
            </Container>    
        </MasterBox>
    )
}