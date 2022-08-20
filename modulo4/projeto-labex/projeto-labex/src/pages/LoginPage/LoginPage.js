import { useNavigate } from "react-router-dom";
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button} from "./Styled"

import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"
import {goUut} from "../../routes/coordinator"
import { login } from "../../services/requestsPost";
import {useForm} from "../../hooks/useForm"

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
        <MasterBox>
            <Container>
                <ContainerItens>
                    <Header/>
                    <MainBox>
                        <div>
                            <h1> Faça login</h1>
                            <form>
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
                            </form>  
                        </div>
                    </MainBox> 
                    <Footer/>    
                </ContainerItens>
            </Container>   
        </MasterBox>
    )



}