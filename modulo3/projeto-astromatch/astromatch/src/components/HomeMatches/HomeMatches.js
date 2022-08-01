import { UserSwitch, ArrowClockwise } from "phosphor-react";

import { MainContainer, MainFooter, MainHeader, MainPrincipal } from './Styled'


export function HomeMatches(props) {

    





    return(
        
        
            <MainContainer>
                <MainHeader> 
                    <ArrowClockwise size={40} color="#f80d0d" weight="bold"  />
                     
                    <h1> AstroMacth</h1>
                    <button> 
                        <UserSwitch size={40} color ="red" />
                    </button>

                </MainHeader>


                <MainPrincipal> 
                    

                </MainPrincipal>



                <MainFooter> 
                    <butto 
                        onClick={props.TrocaDeTela}> Voltar a tela MainPrincipal
                    </butto>
                </MainFooter>
            </MainContainer>
        
    
    )


}