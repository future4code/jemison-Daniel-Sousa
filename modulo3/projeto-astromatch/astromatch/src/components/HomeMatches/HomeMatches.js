import { UserSwitch, ArrowClockwise } from "phosphor-react";

import { MainContainer, MainFooter, MainHeader, MainPrincipal } from './Styled'


export function HomeMatches(props) {

    const MappedList = props.profileList.map((profile, index) =>{
        return (
           <div key={index}>
                <img src={profile.photo}   />
                <p>{profile.name}</p>

           </div>

        )
    })





    return(
        
        
            <MainContainer>
                <MainHeader> 
                    <ArrowClockwise size={40} color="#f80d0d" weight="bold" />
                    <h1> AstroMacth</h1>
                    <button> 
                        <UserSwitch size={40} color ="red" />
                    </button>

                </MainHeader>


                <MainPrincipal> 
                    {MappedList}

                </MainPrincipal>



                <MainFooter> 
                    <butto 
                        onClick={props.TrocaDeTela}> Voltar a tela MainPrincipal
                    </butto>
                </MainFooter>
            </MainContainer>
        
    
    )


}