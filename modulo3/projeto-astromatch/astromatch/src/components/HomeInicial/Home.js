
import { UserSwitch, Alien, HeartStraight, XCircle } from "phosphor-react";

import { MainContainer, MainFooter, MainHeader, MainPrincipal } from './Styled'

export function Home(props) {




    return(
        
            <MainContainer>
                <MainHeader> 

                    <button > <Alien size={40} color ="red"  /></button>
                     {/* Aqui deve ser o botão de limpar*/}

                    <h1> AstroMacth</h1>

                    <button onClick={props.TrocaDeTela}> 
                        <UserSwitch size={40} color ="red" />
                    </button>

                </MainHeader>


                <MainPrincipal>
                    
                        <img src= {props.listaInicial.photo}></img>
                        <span> {props.listaInicial.name}</span>
                    
                 Lista de Pessoas Inicial
                    
                   
                </MainPrincipal>



                <MainFooter> 
                    <button >
                        <HeartStraight size={70}  color ="red" weight="bold" />
                    </button>

                    <button >
                        <XCircle size={50} color ="red" weight="bold" />
                    </button>
                
                    
                </MainFooter>
            </MainContainer>
        
    )
}