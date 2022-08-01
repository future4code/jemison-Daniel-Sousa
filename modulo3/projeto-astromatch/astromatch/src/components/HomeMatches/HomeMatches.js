import { UserSwitch, ArrowClockwise } from "phosphor-react";

import { MainContainer, MainFooter, MainHeader, MainPrincipal } from './Styled'


export function HomeMatches(props) {

    const matchesMapping = props.listaMacthes.map((profiles, index) =>{

        return(
            <div>
                <img img src={profiles.photo}/>
                <p>{profiles.name}</p>

            </div>
        )

    })





    return(
        
        
            <MainContainer>
                <MainHeader> 
                    <button onClick={props.clearMatches} >
                        <ArrowClockwise size={40} color="#f80d0d" weight="bold"  />
                    </button>
                    
                     
                    <h1> AstroMacth</h1>
                    <button> 
                        <UserSwitch size={40} color ="red" />
                    </button>

                </MainHeader>


                <MainPrincipal> 
                    <li>  {matchesMapping}</li>
                   

                </MainPrincipal>



                <MainFooter> 
                    <butto 
                        onClick={props.TrocaDeTela}> Voltar a tela MainPrincipal
                    </butto>
                </MainFooter>
            </MainContainer>
        
    
    )


}