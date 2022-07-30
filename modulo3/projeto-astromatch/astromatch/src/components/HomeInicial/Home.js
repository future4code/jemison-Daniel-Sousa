
import { UserSwitch, Alien, HeartStraight, XCircle } from "phosphor-react";

import { MainContainer, MainFooter, MainHeader, MainPrincipal } from './Styled'

export function Home(props) {




    return(
        
            <MainContainer>
                <MainHeader> 

                    <button onClick={props.PUTClear}> <Alien size={40} color ="red"  /></button>
                     {/* Aqui deve ser o botão de limpar*/}

                    <h1> AstroMacth</h1>

                    <button onClick={props.TrocaDeTela}> 
                        <UserSwitch size={40} color ="red" />
                    </button>

                </MainHeader>


                <MainPrincipal>
                    
                 Lista de Pessoas Inicial

                    <img src={props.initialList.photo}></img>
                    <p> {props.initialList.name}, {props.initialList.age}</p>
                    <div> {props.initialList.bio}</div>
                </MainPrincipal>



                <MainFooter> 
                    <button onClick={props.LikeButton}>
                        <HeartStraight size={70}  color ="red" weight="bold" />
                    </button>

                    <button onClick={props.DislikeButton}>
                        <XCircle size={50} color ="red" weight="bold" />
                    </button>
                
                    
                </MainFooter>
            </MainContainer>
        
    )
}