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
                        <label htmlFor="email"> Email</label>
                        <input
                            
                            placeholder={"seuemail@.com"}
                            required
                            pattern=""// esta faltando a regra do email
                        />

                        <label htmlFor="PASSAWORD"> PASSAWORD  </label>
                        <input
                            placeholder={"********"}
                            required
                            pattern="^.{3}"
                        />
                </FormSection>

                <ButtonsSection>
                        <button onClick={()=>goUut(navigate)}> Voltar</button>
                        <button >  Enviar</button> {/* fazer a função para mandar para o banco de dados ou  colocar esse botão no form*/}
                </ButtonsSection>
            </MasterBox>
            
        </>
    )



}