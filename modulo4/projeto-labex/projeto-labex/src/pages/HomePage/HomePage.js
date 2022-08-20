import { useNavigate } from "react-router-dom";
import { IoIosStats, IoMdBatteryCharging } from "react-icons/io";
import { Header } from "../../components/Header/Header";
import {MasterBox, IconsHeader, ButtonBox, Container, ContainerItens, MainBox} from "./Styled"
import {goToLoginPage, goToListTripsPage} from "../../routes/coordinator"

export function HomePage () {
    const navigate = useNavigate()



    return (
        <MasterBox>
               
            <Container>
                <ContainerItens >
                    <IconsHeader >
                        <IoMdBatteryCharging/>
                        <IoIosStats size={20} color= "red"/>
                    </IconsHeader>

                    <MainBox>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                        <ButtonBox>
                            <button 
                                onClick={()=>goToListTripsPage(navigate)}>
                                    Viagens disponiveis 
                            </button >
                            <button 
                                onClick={()=>goToLoginPage(navigate)}>
                                    Faça Login
                            </button >
                        </ButtonBox>
                    </MainBox>
                </ContainerItens>
            </Container>
        </MasterBox>
    )
}