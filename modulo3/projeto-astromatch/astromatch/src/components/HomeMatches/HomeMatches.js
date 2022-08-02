import { UserSwitch, ArrowClockwise } from "phosphor-react";

import { MainContainer, MainFooter, MainHeader, MainPrincipal, ConteinerPai, BackButton } from './Styled'

import { House  } from "phosphor-react";
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
                        <ArrowClockwise size={40} color="#000000" weight="bold"  />
                    </button>
                    
                     
                    <h1> AstroMacth</h1>
                    <button> 
                        <UserSwitch size={40} ccolor="#000000" />
                    </button>

                </MainHeader>


                <MainPrincipal> 
                    <div>  {matchesMapping}</div>
                   
                </MainPrincipal>



                <MainFooter> 
                    <BackButton onClick={props.TrocaDeTela}> 
                        <House size={30} color="#1a1919" weight="bold" />
                        Voltar a Home
                    </BackButton>
                </MainFooter>
            </MainContainer>
        
    
    )


}