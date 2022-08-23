import React from "react";
import { ImPaste } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useRequestsData } from "../../hooks/useRequestData"
import {Country} from "../../constants/country"
import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button, MainBoxIntns, Title, FormLogin } from "./Styled"

import {goUut} from "../../routes/coordinator"


export function ApplicationFormPage () {
     const navigate = useNavigate()   
     const [data] = useRequestsData ("trips", {})

     const listTrips = data.trips && data.trips.map((trip) => {
        return <option key={trip.id} value={trip.id}>{trip.name}</option>
    }) 

    

     const listOfCountries = Country && Country.map((item)=>{
        return (
            <option key={item}>
                {item}
            </option>
        )
     })


    return (
        <MasterBox>
            <Container>
                <ContainerItens>
                    <Header />
                    <MainBox>
                        <Title>
                            Inscreva-se
                            <ImPaste color="black"/>
                        </Title>
                        <FormLogin>
                            <form>
                                <select >
                                    <option value=""> escolha uma Viagem</option>
                                    {listTrips}
                                </select>

                                <input 
                                    
                                    placeholder={"Nome"}
                                    name = "name"
                                    
                                    pattern ={"^.{5,}$"}
                                    title={"O nome deve ter no mínimo 5 caracteres"}
                                    required
                                    
                                />
                                <input 
                                    
                                    placeholder={"Idade"}
                                    type={"number"}
                                    name= {"age"}
                                
                                    required
                                    min={18}
                                />
                                <input 
                                    
                                    placeholder={"Candidatura"}
                                    name ={"ApplicationForm"}
                                    
                                    pattern ={"^.{30,}$"}
                                    title = {"A descrição deve ter no mínimo 30 caracteres"}
                                    required
                                    
                                />
                                <input 
                                    
                                    placeholder={"Profissão"}
                                    name={"profession"}
                                
                                    pattern ={"^.{10,}$"}
                                    title = {"Profissão no mínimo 30 caracteres"}
                                
                                />
                                <select 
                                    required
                                    placeholder={"Paises"}
                                    
                                    
                                >
                                    <option> escolha um pais</option>
                                    {listOfCountries}
                                </select>
                            </form>
                            <ButtonBox>
                                <Button onClick={()=>goUut(navigate)}> Voltar</Button>
                                <Button >  Inscrever-se</Button>
                            </ButtonBox>
                        </FormLogin>
                    </MainBox> 
                    <Footer/> 
                </ContainerItens>    
            </Container>    
        </MasterBox>
    )
}