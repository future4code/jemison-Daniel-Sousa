import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button, CarTrip, SectionTrip} from "./Styled"
import {goToLoginPage, goToListTripsPage, goToHome} from "../../routes/coordinator"
import { useRequestsData } from "../../hooks/useRequestData"
import {CarLoading} from "../../components/CardLoading/CardLoading"
import {decideCandidate} from "../../services/requestPut"
import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"


export function TripDetailsPage () {

    const id = useParams()
    
    const[detailsData, getTripsDetail] = useRequestsData(`trip/${id.id}`, {})
    
   
    const candidatesList =  detailsData.trip ? detailsData.trip.candidates.map((candidate) =>{
        return(
            <CarTrip  key={candidate.id}>
                 <p><span>Nome:</span>{candidate.name}</p>
                 <p><span>Profissão:</span>{candidate.profession}</p>
                 <p><span>Idade:</span>{candidate.age}</p>
                 <p><span>País:</span>{candidate.country}</p>
                 <p><span>Candidatura:</span>{candidate.applicationText}</p>
                 <button onClick={() => decide(candidate.id,true)}>Aprovar</button>
                 <button onClick={() => decide(candidate.id,false)}>Reprovar</button>
            </CarTrip>
        )
    }):  (<CarLoading/>);

    const decide = (candidateId, decision) => {  
        decideCandidate(id.id, candidateId, decision, getTripsDetail)
    }
    
    const approvedList =  detailsData.trip ? detailsData.trip.approved.map((candidate) =>{
        return(
            <CarTrip  key={candidate.id}>
                 <p><span>Nome:</span>{candidate.name}</p>
            </CarTrip>
        )
    }) : (<CarLoading/>);

    return (
        <MasterBox>
               
        <Container>
            <ContainerItens >
                <Header />
                <MainBox>
                    <h2>Lista de Cadidatos</h2>
                    <SectionTrip>
                        {candidatesList}
                    </SectionTrip>
                    <h2>Candidatos Aprovados</h2>
                    <SectionTrip>
                        {approvedList}
                    </SectionTrip>
                </MainBox> 
                <Footer/>
            </ContainerItens>
           
        </Container>
    </MasterBox>
    )
}