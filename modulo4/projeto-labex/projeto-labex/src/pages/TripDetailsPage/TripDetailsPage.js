import React from "react";
import {useParams } from "react-router-dom";
import { FcApproval } from "react-icons/fc";
import { CgCloseO } from "react-icons/cg";
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,ButtonApprove,ButtonRepprove, CarTrip, SectionTrip,  CarTripAprove} from "./Styled"
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
                 <ButtonBox>
                    <ButtonApprove
                        onClick={() => decide(candidate.id,true)}> 
                        < FcApproval size={20}/>
                        Aprovar
                    </ButtonApprove>
                    <ButtonRepprove 
                        onClick={() => decide(candidate.id,false)}>
                        <CgCloseO size={20} />
                        Reprovar
                    </ButtonRepprove>
                 </ButtonBox>
            </CarTrip>
        )
    }):  (<CarLoading/>);

    const decide = (candidateId, booleano) => {  
        decideCandidate(id.id, candidateId, booleano, getTripsDetail)
    }
    
    const approvedList =  detailsData.trip ? detailsData.trip.approved.map((candidate) =>{
        return(
            < CarTripAprove  key={candidate.id}>
                 <p><span>Nome:</span>{candidate.name}</p>
            </ CarTripAprove>
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



