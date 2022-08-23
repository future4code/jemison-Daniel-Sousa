import React from "react";
import { useNavigate } from "react-router-dom";
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button} from "./Styled"
import {goToLoginPage, goToListTripsPage} from "../../routes/coordinator"
import logo from "../../assets/img/logo.png"
import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"


export function TripDetailsPage () {
    


    return (
        <MasterBox>
               
        <Container>
            <ContainerItens >
                <Header />
                <MainBox>
                  
                    
                    
                </MainBox> 
                <Footer/>
            </ContainerItens>
           
        </Container>
    </MasterBox>
    )
}