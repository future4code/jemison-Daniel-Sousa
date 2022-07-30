
import { UserSwitch, Alien, HeartStraight, XCircle } from "phosphor-react";

import { MainContainer, MainFooter, MainHeader, MainPrincipal } from './Styled'

export function Home(props) {




    return(
        
            <MainContainer>
                <MainHeader> 
                    <Alien size={40} color ="red"  />
                    <h1> AstroMacth</h1>
                    <button onClick={props.TrocaDeTela}> 
                        <UserSwitch size={40} color ="red" />
                    </button>

                </MainHeader>


                <MainPrincipal>
                    
                 Lista de Pessoas Inicial

                    <img></img>
                    <p></p>

                </MainPrincipal>



                <MainFooter> 
                    
                    <HeartStraight size={70}  color ="red" weight="bold" />
                    <XCircle size={50} color ="red" weight="bold" />
                </MainFooter>
            </MainContainer>
        
    )
}