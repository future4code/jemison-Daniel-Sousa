import { useState } from "react"


export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (event) =>{
        const { name, value } = event.target 
        setForm({...form, [name]: value}) 
    }

    const functionClear = () => {
        setForm(initialState) 
    }

    return {form, onChange, functionClear}
}