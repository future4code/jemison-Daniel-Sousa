import React from "react"
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"

import { Header } from "../../components/Header/Header";
import {goUut} from "../../routes/coordinator"
import {MasterBox, ButtonsSection, FormSection} from "./Styled"
import { login } from "../../services/requestsPost";


export function LoginPage () {
  
    const navigate = useNavigate() 


    const { form, onChange} = useForm({
        email: "", 
        password: ""
    })

    const onClickLogin = (event) => {
        event.preventDefault()
        login(form, navigate)
    }


    return (
        <>
            
            <MasterBox>
                <h1> Faça login</h1>
                <FormSection>
                <h1> Login </h1>
                    <h3> Conecte-se para continuar </h3>
                    <form onSubmit={onClickLogin}>
                    <p>EMAIL</p>
                    <input 
                        placeholder={"seuemail@gmail.com"}
                        type={"email"}
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        required
                    />
                    <p>PASSWORD</p>
                    <input 
                        placeholder={"********"}
                        type={"password"}
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        required
                    />
                    <button type={"submit"}>Login</button>
                    </form>
                    <button onClick={()=>goUut(navigate)}> Voltar</button>
                </FormSection>  
            </MasterBox>
            
        </>
    )



}