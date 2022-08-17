import React from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import {planets} from "../../constants/planet"
import {goToAdminHomePag} from "../../routes/coordinator" 

export function CreateTripPage () {

    const navigate = useNavigate()
    
    const {form, onChange, clearForm} = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
     })

    const dateToday =  new Date().toISOString().split('T')[0]

    const listOfPlanets = planets.map((planet)=>{
        return (
            <option key={planet.id} value={planet.id}>
                {planet}
            </option>
        )
     })

    return (
        <>
            <p>Criar viagens</p>
            <form>
                <input 
                    placeholder={"Nome"}
                    name="name"
                    value={form.name}
                    onChange ={onChange}
                    pattern ={"^.{5,}$"}
                    title = {"O nome da viagem deve ter no mínimo 5 caracteres"}
                    required
                />

                <input 
                    placeholder={"Descrição"}
                    name="description"
                    value={form.description}
                    onChange ={onChange}
                    required
                    pattern ={"^.{30,}$"}
                    title = {"A descrição deve ter no mínimo 30 caracteres"}
                    
                />

                <input 
                    placeholder={"Duração em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange ={onChange}
                    required
                    min={50}
                />

                 <section>
                    <select
                         placeholder={"Planeta"}
                         name={"planet"}
                         defaultValue ={""}
                         onChange ={onChange}
                     >
                    <option value={""}>Escolha um planeta</option>
                         {listOfPlanets}
                    </select>
                        <input
                            placeholder={"Data"}
                            type={"date"}
                            name = {"date"}
                            value ={form.date}
                            onChange ={onChange}
                            required
                            min={dateToday}
                        />
                    </section>
                    <section>
                        <button onClick={() =>goToAdminHomePag(navigate)}> Voltar</button>
                        <button type={"submit"}> Criar</button>
                    </section>
            </form>
            
        </>
    )


}