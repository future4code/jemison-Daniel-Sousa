import { useNavigate } from "react-router-dom"
import { useRequestsData } from "../../hooks/useRequestData"
import {goToHome, gotoApplicationFormPage} from "../../routes/coordinator"

import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"

import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button} from "./Styled"



export function ListTripsPage () {
    const navigate = useNavigate()
    // const [data, isLoading, error] = useRequestsData("/trips")

    // const listTrips = data && data.map((trip)=>{
    //     return (     
    //         <div  key={trip.id}>
    //              <div>
    //                  <p> Nome: {trip.name}</p>
    //                  <p> Descrição: {trip.description}</p>
    //                  <p> Planeta:{trip.planet}</p>
    //                  <p> Duração: {trip.durationInDays}</p>
    //                  <p> Data: {trip.date}</p>
    //            </div>
    //         </div>      
    //     )
    // })

    return (
        <MasterBox>
            <Container>
                <ContainerItens>
                    <Header />
                    <MainBox>
                        <h1> Lista aqui</h1>
                        <div>
                            <button onClick={()=>goToHome(navigate)}> Voltar</button>
                            <button onClick={()=> gotoApplicationFormPage(navigate)}>        Inscrever-se
                            </button>
                        </div>
                        {/* <div>
                            {!isLoading  && <p> Carreango viagens</p>}
                            {!isLoading && error && (<p>Ocorreu um erro</p>)}
                            {isLoading && data && data.length > 0 && (listTrips)}
                            
                        </div> */}
                    </MainBox> 
                    <Footer/> 
                </ContainerItens>    
            </Container>    
        </MasterBox>
    )
}