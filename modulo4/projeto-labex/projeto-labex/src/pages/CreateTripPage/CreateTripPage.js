import React from "react"
import { useNavigate } from "react-router-dom"
import { useRequestsData } from "../../hooks/useRequestData"
import { useForm } from "../../hooks/useForm"
import {planets} from "../../constants/planet"


export function CreateTripPage () {

    const navigate = useNavigate()
    const [data] = useRequestsData("/trips")
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
                    required
                />

                <input 
                    placeholder={"Descrição"}
                    name="description"
                    value={form.description}
                    required
                />

                <input 
                    placeholder={"Duração em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    required
                />
            </form>
            <section>
                <select
                    placeholder={"Planeta"}
                    name={"planet"}
                    value={form.planet}
                >
                    <option value={""}>Escolha um planeta</option>
                    {listOfPlanets}
                </select>
                <input
                    placeholder={"Data"}
                    type={"date"}
                    name = {"date"}
                    value ={form.date}
                    required
                    min={dateToday}
                
                />
            </section>
        </>
    )


}