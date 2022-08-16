import React from "react"
import { useNavigate } from "react-router-dom"
import { useRequestsData } from "../../hooks/useRequestData"
import { useForm } from "../../hooks/useForm"
import {Country} from "../../constants/country"


export function CreateTripPage () {

    const navigate = useNavigate()
    const [form, onChange, clearForm] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
     })


    return (
        <>
            <p>Criar viagens</p>
            <form>
                <input 
                    placeholder="nome"
                    name="name"
                />
            </form>
        
        </>
    )


}