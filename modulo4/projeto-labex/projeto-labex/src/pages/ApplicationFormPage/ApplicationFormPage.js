import React, { useState } from "react";
import { ImPaste } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useRequestsData } from "../../hooks/useRequestData"
import { useForm} from "../../hooks/useForm"
import {Country} from "../../constants/country"
import {sendApplication} from "../../services/requestsPost"
import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button, Title, FormLogin } from "./Styled"

import {goUut} from "../../routes/coordinator"


export function ApplicationFormPage () {
     const navigate = useNavigate()  
     const [tripId, setTripId] = useState("") 
     const [data] = useRequestsData ("trips", {})
     const { form, onChange, functionClear} = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })

    const listTrips = data.trips && data.trips.map((trip) => {
        return <option key={trip.id} value={trip.id}>{trip.name}</option>
    }) 

     const listOfCountries = Country && Country.map((item)=>{
        return (
            <option key={item}  value={item}>
                {item}
            </option>
        )
     })

    const onChangeTrip = (event) => {
        setTripId(event.target.value);
    };
    const onClickSendApplication = (event) => {
        event.preventDefault();
        sendApplication(form, tripId, functionClear);
    }
     

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
                            <form onSubmit={onClickSendApplication}>
                                <select 
                                    defaultValue={""}
                                    onChange={onChangeTrip}
                                    required
                                >
                                    <option  
                                        value={""} 
                                        disabled
                                        > escolha uma Viagem
                                    </option>
                                    {listTrips}
                                </select>

                                <input 
                                    placeholder="Digite seu nome"
                                    id={"name"}
                                    name={"name"}
                                    value={form.name}
                                    onChange={onChange}
                                    pattern={"^.{3,}$"}
                                    title={"O nome deve ter no mínimo 3 caracteres"}
                                    required   
                                />
                                <input  
                                    placeholder={"Idade"}
                                    type={"number"}
                                    name= {"age"}
                                    value={form.age}
                                    onChange={onChange}
                                    required
                                    min={18}
                                />
                                <input 
                                    placeholder={"Candidatura"}
                                    name ={"applicationText"}
                                    value={form.applicationText}
                                    onChange={onChange}
                                    pattern ={"^.{30,}$"}
                                    title = {"A descrição deve ter no mínimo 30 caracteres"}
                                    required
                                    
                                />
                                <input 
                                    placeholder={"Profissão"}
                                    name={"profession"}
                                    value={form.profession}
                                    onChange={onChange}
                                    pattern ={"^.{10,}$"}
                                    title = {"Profissão no mínimo 30 caracteres"}
                                />
                                <select 
                                    required
                                    placeholder={"Paises"}
                                    value={form.country}
                                    onChange={onChange}
                                    name={"country"}
                                    
                                >
                                    <option 
                                        value={""} 
                                        disabled
                                    > escolha um pais</option>
                                    {listOfCountries}
                                </select>
                                <ButtonBox>
                                    <Button onClick={()=>goUut(navigate)}>      Voltar</Button>
                                    <Button type={"submit"}> Finalizar</Button>
                                </ButtonBox>
                            </form>
                            
                        </FormLogin>
                    </MainBox> 
                    <Footer/> 
                </ContainerItens>    
            </Container>    
        </MasterBox>
    )
}