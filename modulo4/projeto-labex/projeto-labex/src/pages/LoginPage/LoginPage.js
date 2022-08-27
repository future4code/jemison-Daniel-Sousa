import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdPlanet } from "react-icons/io";
import {MasterBox, Container, ContainerItens, MainBox,Button, MainBoxIntns, Title, FormLogin } from "./Styled"

import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"
import {goToHome} from "../../routes/coordinator"
import {BASE_URL} from "../../constants/urls"
import {goToAdminHomePag} from "../../routes/coordinator"
import axios from "axios";
import {useForm} from "../../hooks/useForm"


export function LoginPage () {
    const {form, onChange} = useForm({ email: "", password: "" })
    const navigate = useNavigate() 

    const loginPage = (event) =>{
        event.preventDefault() 
        axios.post(`${BASE_URL}/login`,form)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                ;
                goToAdminHomePag(navigate)
            })
            .catch((error) => console.log(error.message))
    }
    
    return (
        <MasterBox>
            <Container>
                <ContainerItens>
                    <Header/>
                    <MainBox>
                        <Title>  
                                FAÇA LOGIN
                            <IoMdPlanet color="#00875f"/>
                        </Title>
                        <MainBoxIntns>
                            
                            <FormLogin>
                                    <h1> Login </h1>
                                    <span> Conecte-se para continuar </span>
                                    <form onSubmit={loginPage}>
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