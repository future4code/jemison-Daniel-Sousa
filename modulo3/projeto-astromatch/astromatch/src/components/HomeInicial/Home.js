
import { UserSwitch, Alien, HeartStraight, XCircle } from "phosphor-react";

import { MainContainer, MainFooter, MainHeader, MainPrincipal, PhotoUser} from './Styled'

export function Home(props) {




    return(
        
            <MainContainer>
                <MainHeader> 

                    <button > <Alien size={40} color ="red"  /></button>
                     {/* Aqui deve ser o botão de limpar*/}

                    <h1> AstroMacth</h1>

                    <button onClick={props.matchesList}> 
                        <UserSwitch size={40} color ="red" />
                    </button>

                </MainHeader>


                <MainPrincipal>
                    
                       
                            <PhotoUser src={props.listaInicial.photo}/>
                       
                        
                        <span>
                            {props.listaInicial.name}
                            {props.listaInicial.age}
                            {props.listaInicial.bio}
                        </span>
                   
                </MainPrincipal>



                <MainFooter> 
                    <button onClick={props.likebutton}>
                        <HeartStraight size={70}  color ="red" weight="bold" />
                    </button>

                    <button onClick={props.dislikeButton}>
                        <XCircle size={50} color ="red" weight="bold" />
                    </button>
                
                    
                </MainFooter>
            </MainContainer>
        
    )
}