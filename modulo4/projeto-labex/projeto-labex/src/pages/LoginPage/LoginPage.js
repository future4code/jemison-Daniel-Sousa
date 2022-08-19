import React from "react"
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import {useUnprotectedPage} from '../../hooks/useUnprotectedPage'
import { Header } from "../../components/Header/Header";
import {goUut} from "../../routes/coordinator"
import {MasterBox, ButtonsSection, FormSection} from "./Styled"
import { login } from "../../services/requestsPost";




export function LoginPage () {
    useUnprotectedPage()

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
                    <form onSubmit={onClickLogin}>
                        <label> Email</label>
                            <input
                            
                            placeholder={"seuemail@gmail.com"}
                            type={"email"}
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            required
                        />

                        <label htmlFor="PASSAWORD"> PASSAWORD  </label>
                            <input
                                placeholder={"********"}
                                type={"password"}
                                name={"password"}
                                value={form.password}
                                onChange={onChange}
                                required
                        />
                        
                        
                        <button type={"submit"}>  Entra</button>
                    </form>
                    <button onClick={()=>goUut(navigate)}> Voltar</button>
                </FormSection>  
            </MasterBox>
            
        </>
    )



}