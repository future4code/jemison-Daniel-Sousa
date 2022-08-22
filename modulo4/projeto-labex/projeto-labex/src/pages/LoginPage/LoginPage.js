import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdPlanet } from "react-icons/io";
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button, MainBoxIntns, Title, FormLogin } from "./Styled"

import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"
import {goUut} from "../../routes/coordinator"
import { login } from "../../services/requestsPost";
import {useForm} from "../../hooks/useForm"
import {useVerifyToken} from "../../hooks/useVerifyToken"

export function LoginPage () {
    useVerifyToken()
    const navigate = useNavigate() 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangePassword = (event) => {
        setPassword(event.target.value);
      };
    
      const onChangeEmail = (event) => {
        setEmail(event.target.value);
      };

      const onChangeLogin  = (event) =>{
        event.preventDefault()

        login(email,password)
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
                                        name={"email"}
                                        value={email}
                                        onChange={onChangeEmail}
                                        required
                                    />
                                    <label>PASSWORD</label>
                                    <input 
                                        placeholder={"********"}
                                        type={"password"}
                                        name={"password"}
                                        value={password}
                                        onChange={onChangePassword}
                                        required
                                    />
                                    <Button>Login</Button>
                                </form>
                                <Button  onClick={()=>goUut(navigate)}> Voltar</Button>
                            </FormLogin>  
                        </MainBoxIntns>
                    </MainBox> 
                    <Footer/>    
                </ContainerItens>
            </Container>   
        </MasterBox>
    )



}