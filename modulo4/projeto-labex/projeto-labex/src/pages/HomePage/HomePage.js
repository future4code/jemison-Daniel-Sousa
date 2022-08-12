import { Header } from "../../components/Header/Header";
import {MasterBox, PresentationBox, ButtonBox} from "./Styled"

export function HomePage () {

    return (
        <>
            <Header/>
            <MasterBox>
                <PresentationBox>
                    <di>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </di>
                    <di>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </di>

                </PresentationBox>
                

                <ButtonBox>
                    <button>Viagens Diponiveis</button>
                    <button>Viagens Diponiveis</button>
                </ButtonBox>
                
            </MasterBox>
        </>
    )
}