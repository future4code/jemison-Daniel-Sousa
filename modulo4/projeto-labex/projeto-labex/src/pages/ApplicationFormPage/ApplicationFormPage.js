import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestsData } from "../../hooks/useRequestData"
import { useForm } from "../../hooks/useForm"
import {ApplicationForm, MasterBox, ButtonsSection} from "./Styled"
import {Country} from "../../constants/country"


import { Header } from "../../components/Header/Header";
import {goUut} from "../../routes/coordinator"


export function ApplicationFormPage () {
     const navigate = useNavigate()   
     const [data] = useRequestsData("/trips")
     const {form, onChange, clearForm} = useForm({
        name: "",
        age: "",
        ApplicationForm: "",
        profession: "",
        coutry: ""
     })



     const travelList = data && data.map((travel)=>{
        return (
            <option key={travel.id} value={travel.id}>
                {travel.name}
            </option>
        )
     })

     const listOfCountries = Country && Country.map((item)=>{
        return (
            <option key={item}>
                {item}
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
                            name = "name"
                            value={form.name}
                            onChange ={onChange}
                            pattern ={"^.{5,}$"}
                            title={"O nome deve ter no mínimo 5 caracteres"}
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
                            name ={"ApplicationForm"}
                            value={form.ApplicationForm}
                            onChange ={onChange}
                            pattern ={"^.{30,}$"}
                            title = {"A descrição deve ter no mínimo 30 caracteres"}
                            required
                            
                        />
                        <input 
                            
                            placeholder={"Profissão"}
                            name={"profession"}
                            value ={form.profession}
                            onChange ={onChange}
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
                </ApplicationForm>
                <ButtonsSection>
                    <button onClick={()=>goUut(navigate)}> Voltar</button>
                    <button >  Inscrever-se</button>
                </ButtonsSection>
            </MasterBox>
            

        </>
    )
}