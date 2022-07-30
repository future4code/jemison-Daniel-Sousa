import { UserSwitch, ArrowClockwise } from "phosphor-react";

import { MainContainer, MainFooter, MainHeader, MainPrincipal } from './Styled'


export function HomeMatches() {
    return(
        
        
            <MainContainer>
                <MainHeader> 
                    <ArrowClockwise size={40} color="#f80d0d" weight="bold" />
                    <h1> AstroMacth</h1>
                    <UserSwitch size={40} color ="red" />

                </MainHeader>


                <MainPrincipal> Aqui  é main
                    <img></img>
                    <p></p>

                </MainPrincipal>



                <MainFooter> 
                    <butto> Voltar a tela MainPrincipal</butto>
                </MainFooter>
            </MainContainer>
        
    
    )


}