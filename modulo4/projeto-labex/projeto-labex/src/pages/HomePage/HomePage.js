import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import {MasterBox, PresentationBox, ButtonBox, MainSection} from "./Styled"
import {goToLoginPage, goToListTripsPage} from "../../routes/coordinator"

export function HomePage () {
    const navigate = useNavigate()



    return (
        <MasterBox>
            
            <MainSection>
                <Header/>
                <PresentationBox>
                    <di>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </di>
                    <di>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </di>

                </PresentationBox>
                

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
                
            </MainSection>
        </MasterBox>
    )
}