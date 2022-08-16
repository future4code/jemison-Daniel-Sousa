import React from "react"
import { useNavigate } from "react-router-dom"
import { useRequestsData } from "../../hooks/useRequestData"
import { useForm } from "../../hooks/useForm"
import {Country} from "../../constants/country"


export function CreateTripPage () {

    const navigate = useNavigate()
    const [data] = useRequestsData("/trips")
    const [form, onChange, clearForm] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
     })

    const dateToday =  new Date().toISOString().split('T')[0]

    const listOfPlanets = data && data.map((planet)=>{
        return (
            <option key={planet.id} value={planet.id}>
                {planet.name}
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
                    required
                />

                <input 
                    placeholder={"Descrição"}
                    name="description"
                    required
                />

                <input 
                    placeholder={"Duração em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    required
                />
            </form>
            <section>
                <select
                    placeholder={"Planeta"}
                    name={"planet"}
                >
                    <option value={""}>Escolha um planeta</option>
                    {listOfPlanets}
                </select>
            </section>
        </>
    )


}