import { UserSwitch, ArrowClockwise } from "phosphor-react";

import { MainContainer, MainFooter, MainHeader, MainPrincipal, ConteinerPai, BackButton } from './Styled'


export function HomeMatches(props) {

    const matchesMapping = props.listaMacthes.map((profiles, index) =>{

        return(
            <ConteinerPai>
                <img src={profiles.photo}/>
                <p>{profiles.name}</p>

            </ConteinerPai>
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
                    <div>  {matchesMapping}</div>
                   
                </MainPrincipal>



                <MainFooter> 
                    <BackButton onClick={props.TrocaDeTela}> 
                        Voltar a Home
                    </BackButton>
                </MainFooter>
            </MainContainer>
        
    
    )


}