import React from "react"
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import {goUut} from "../../routes/coordinator"
import {MasterBox, ButtonsSection, FormSection} from "./Styled"

export function LoginPage () {

    const navigate = useNavigate() 

    return (
        <>
            <Header />
            <MasterBox>
                <h1> Faça login</h1>
                <FormSection>
                        <label> Email</label>
                        <input
                            placeholder={"seuemail@.com"}
                        
                        />

                        <label> PASSAWORD  </label>
                        <input
                            placeholder={"********"}
                        
                        />
                </FormSection>

                <ButtonsSection>
                        <button onClick={()=>goUut(navigate)}> Voltar</button>
                        <button >  Enviar</button>
                </ButtonsSection>
            </MasterBox>
            
        </>
    )



}