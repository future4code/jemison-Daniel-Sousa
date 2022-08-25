import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button, CarTrip, SectionTrip} from "./Styled"
import {goToLoginPage, goToListTripsPage, goToHome} from "../../routes/coordinator"
import { useRequestsData } from "../../hooks/useRequestData"
import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"


export function TripDetailsPage () {

    const id = useParams()
    
     const[detailsData, getTripsDetail] = useRequestsData(`trip/${id.id}`, {})
    
    const candidatesList = detailsData && detailsData.trip && detailsData.trip.candidates.map((candidate) =>{
        return(
            <CarTrip  key={candidate.id}>
                 <p><span>Nome:</span>{candidate.name}</p>
                 <p><span>Profissão:</span>{candidate.profession}</p>
                 <p><span>Idade:</span>{candidate.age}</p>
                 <p><span>País:</span>{candidate.country}</p>
                 <p><span>Candidatura:</span>{candidate.applicationText}</p>
            </CarTrip>
        )
    })

    // const successfulCandidates = detailsData && detailsData.trip && detailsData.trip.aprroved.map((candidate) =>{
    //     return(
    //         <div key={candidate.id}>
    //              <span><b>Nome:</b>{candidate.name}</span>
    //         </div>
    //     )
    // })

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
                    
                    
                </MainBox> 
                <Footer/>
            </ContainerItens>
           
        </Container>
    </MasterBox>
    )
}