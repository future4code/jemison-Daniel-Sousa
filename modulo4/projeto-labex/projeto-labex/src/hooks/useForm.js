
import {useState } from "react";


export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState) // usando a desestruturação
    
    const onChange = (event) =>{
        const {name, value} = event.target
        setForm({...form, [name]:value})
    }

    const clearForm = () =>{
        setForm(initialState)
    }


    return {form, onChange, clearForm}
}

// Aqui estou usando um função e não é uma função
