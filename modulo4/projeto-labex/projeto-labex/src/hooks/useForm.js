
import {useState } from "react";


export function useForm (initialState) {
    const [form, setForm] = useState(initialState) // usando a desestruturação
    
    const onChange = (event) =>{
        const {name, value} = event.target
        setForm({...form, [name]:value})
    }

    const clearForm = () =>{
        setForm("")
    }


    return {form, onChange, clearForm}
}