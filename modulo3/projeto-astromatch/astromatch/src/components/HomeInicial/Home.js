
import { UserSwitch, Fire, HeartStraight, XCircle } from "phosphor-react";

import { MainContainer, MainFooter, MainHeader, MainPrincipal, PhotoUser, SecaoPhotouser, SecaoDescricaoUser, SecaoBioUser} from './Styled'

export function Home(props) {




    return(
        
            <MainContainer>
                <MainHeader> 

                    <button > <Fire size={50} color="#000000" weight="bold" /></button>
                     {/* Aqui deve ser o botão de limpar*/}

                    <h1> AstroMacth</h1>

                    <button onClick={props.matchesList}> 
                        <UserSwitch size={50} color="#000000" />
                    </button>

                </MainHeader>


                <MainPrincipal>
                    <SecaoPhotouser>
                        <PhotoUser src={props.listaInicial.photo}/>
                    </SecaoPhotouser>
                    
                    <SecaoDescricaoUser>
                        <h3> 
                            {props.listaInicial.name}  
                                  <span> 
                                    {props.listaInicial.age}  anos
                                </span>
                        </h3> 
                    </SecaoDescricaoUser>
                           
                     <SecaoBioUser>
                        <span>
                            {props.listaInicial.bio}
                        </span>
                     </SecaoBioUser>   
                        
                        
                   
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