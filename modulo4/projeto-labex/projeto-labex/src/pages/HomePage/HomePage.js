import { useNavigate } from "react-router-dom";
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button} from "./Styled"
import {goToLoginPage, goToListTripsPage} from "../../routes/coordinator"
import logo from "../../assets/img/logo.png"
import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"

export function HomePage () {
    const navigate = useNavigate()

    return (
        <MasterBox>
               
            <Container>
                <ContainerItens >
                    <Header />
                    <MainBox>
                       <img src={logo}/>
                        
                        <ButtonBox>
                            <Button 
                                onClick={()=>goToListTripsPage(navigate)}>
                                    Viagens disponiveis 
                            </Button >
                            <Button 
                                onClick={()=>goToLoginPage(navigate)}>
                                    Faça Login
                            </Button >
                        </ButtonBox>
                    </MainBox> 
                    <Footer/>
                </ContainerItens>
               
            </Container>
        </MasterBox>
    )
}