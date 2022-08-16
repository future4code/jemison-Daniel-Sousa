import React from "react"
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { Header } from "../../components/Header/Header";
import {goUut} from "../../routes/coordinator"
import {MasterBox, ButtonsSection, FormSection} from "./Styled"

export function LoginPage () {

    const navigate = useNavigate() 

    const { form, onChange} = useForm({
        email: "", 
        password: ""
    })

    return (
        <>
            <Header />
            <MasterBox>
                <h1> Faça login</h1>
                <FormSection>
                    
                        <label> Email</label>
                        <input
                            
                            placeholder={"seuemail@gmail.com"}
                            type={"email"}
                            name={"email"}
                            value ={form.email}
                            onChange ={onChange}
                            required
                            pattern=""// esta faltando a regra do email
                        />

                        <label htmlFor="PASSAWORD"> PASSAWORD  </label>
                        <input
                            placeholder={"********"}
                            type={"password"}
                            name={"password"}
                            value ={form.password}
                            onChange ={onChange}
                            required
                            pattern="^.{3}"
                        />
                </FormSection>
                <ButtonsSection>
                     <button onClick={()=>goUut(navigate)}> Voltar</button>
                     <button type="submit" >  Enviar</button> {/* fazer a função para mandar para o banco de dados ou  colocar esse botão no form*/}
                </ButtonsSection>
                
            </MasterBox>
            
        </>
    )



}