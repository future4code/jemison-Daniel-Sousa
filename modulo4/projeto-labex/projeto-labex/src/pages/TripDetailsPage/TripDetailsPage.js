import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button} from "./Styled"
import {goToLoginPage, goToListTripsPage, goToHome} from "../../routes/coordinator"
import { useRequestsData } from "../../hooks/useRequestData"
import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"


export function TripDetailsPage () {

    const id = useParams()
    
    const[detailsData, getTripsDetail] = useRequestsData(`trip/${id.id}`, {})
    
    const candidatesList = detailsData && detailsData.trip && detailsData.trip.candidates.map((candidate) =>{
        return(
            <div key={candidate.id}>
                 <span><b>Nome:</b>{candidate.name}</span>
            </div>
        )
    })

    return (
        <MasterBox>
               
        <Container>
            <ContainerItens >
                <Header />
                <MainBox>
                    {candidatesList}
                    
                </MainBox> 
                <Footer/>
            </ContainerItens>
           
        </Container>
    </MasterBox>
    )
}