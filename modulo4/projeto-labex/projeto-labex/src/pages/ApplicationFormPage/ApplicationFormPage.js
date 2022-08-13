import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestsData } from "../../hooks/useRequestData"
import {ApplicationForm, MasterBox, ButtonsSection} from "./Styled"

import { Header } from "../../components/Header/Header";
import {goUut} from "../../routes/coordinator"


export function ApplicationFormPage () {
     const navigate = useNavigate()   
     const [data] = useRequestsData("/trips")

     const travelList = data && data.map((travel)=>{
        return (
            <option key={travel.id} value={travel.id}>
                {travel.name}
            </option>
        )
     })


    return (
        <>
            <Header/>
            <MasterBox>
                <h1> Inscreva-se para uma das viagens</h1>
                <ApplicationForm>
                    <form>
                        <select >
                            <option value=""> escolha uma Viagem</option>
                            {travelList}
                        </select>

                        <input 
                            placeholder={"Nome"}
                        
                        />
                        <input 
                            placeholder={"Idade"}
                        
                        />
                        <input 
                            placeholder={"Candidatura"}
                        
                        />
                        <input 
                            placeholder={"Profissão"}
                        
                        />
                        <input 
                            placeholder={"País"}
                        
                        />
                        </form>
                </ApplicationForm>
                <ButtonsSection>
                    <button onClick={()=>goUut(navigate)}> Voltar</button>
                    <button >  Inscrever-se</button>
                </ButtonsSection>
            </MasterBox>
            

        </>
    )
}