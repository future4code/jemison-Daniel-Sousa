import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdPlanet } from "react-icons/io";
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button, MainBoxIntns, Title, FormLogin } from "./Styled"

import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"
import {goToHome} from "../../routes/coordinator"
import { login } from "../../services/requestsPost";
import {useForm} from "../../hooks/useForm"
import {useVerifyToken} from "../../hooks/useVerifyToken"

export function LoginPage () {
   
    const navigate = useNavigate() 

    const {form, onChange} = useForm({
        email: "",
        password: "",
    })

  

      const onChangeLogin  = (event) =>{
        event.preventDefault()

        login(form,navigate)
      }


    return (
        <MasterBox>
            <Container>
                <ContainerItens>
                    <Header/>
                    <MainBox>
                        <Title> 
                            <IoMdPlanet color="#00875f"/> 
                                FAÇA LOGIN
                            <IoMdPlanet color="#00875f"/>
                        </Title>
                        <MainBoxIntns>
                            
                            <FormLogin>
                                    <h1> Login </h1>
                                    <span> Conecte-se para continuar </span>
                                    <form  onSubmit={onChangeLogin}>
                                    <label>EMAIL</label>
                                    <input 
                                        placeholder={"seuemail@gmail.com"}
                                        type={"email"}
                                        id={"email"}
                                        name={"email"}
                                        value={form.email}
                                        onChange={onChange}
                                        required
                                    />
                                    <label>PASSWORD</label>
                                    <input 
                                        placeholder={"********"}
                                        type={"password"}
                                        id={"password"}
                                        name={"password"}
                                        value={form.password}
                                        onChange={onChange}
                                        required
                                    />
                                    <Button>Login</Button>
                                </form>
                                <Button  onClick={()=>goToHome(navigate)}> Voltar</Button>
                            </FormLogin>  
                        </MainBoxIntns>
                    </MainBox> 
                    <Footer/>    
                </ContainerItens>
            </Container>   
        </MasterBox>
    )



}