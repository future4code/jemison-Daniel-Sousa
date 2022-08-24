import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button} from "./Styled"
import {goToLoginPage, goToListTripsPage} from "../../routes/coordinator"
import { useRequestsData } from "../../hooks/useRequestData"
import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"


export function TripDetailsPage () {
    // const navigate = useNavigate()
    // const id = useParams()
    // const [data, setGetTripsDetail] = useRequestsData ("trips/${id.tripId}", {})



    // const listCandidates = data.trip && data.trip.candidates.map((candidate) =>{
    //     <div key={candidate.id}>
    //         <p><span>Nome:</span>{candidate.name}</p>
    //         <p><span>Profissão:</span>{candidate.profession}</p>
    //         <p><span>Idade:</span>{candidate.age}</p>
    //         <p><span>País:</span>{candidate.country}</p>
    //         <p><span>Candidatura:</span>{candidate.applicationText}</p>
    //         <button> Aprovar</button>
    //         <button> Reprovar</button>
    //     </div>
    // })

    // const listAproved = data.trip && data.trip.candidates.map((person)=>{
    //     return(
    //         <div key={person.id}>
    //             {person.name}
    //         </div>
    //     )
    // })




    return (
        <MasterBox>
               
        <Container>
            <ContainerItens >
                <Header />
                <MainBox>
                  <h3> Canidatos Pendentes</h3>
                    {/* {listCandidates} */}
                  <h3> Canidatos Aprovados</h3>
                    {/* {listAproved} */}
                </MainBox> 
                <Footer/>
            </ContainerItens>
           
        </Container>
    </MasterBox>
    )
}