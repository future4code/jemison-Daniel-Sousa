import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import {MasterBox, PresentationBox, ButtonBox, Container} from "./Styled"
import {goToLoginPage, goToListTripsPage} from "../../routes/coordinator"

export function HomePage () {
    const navigate = useNavigate()



    return (
        <MasterBox>
            
            <Container>
              
                    <div>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>

                
                

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
                
            </Container>
        </MasterBox>
    )
}