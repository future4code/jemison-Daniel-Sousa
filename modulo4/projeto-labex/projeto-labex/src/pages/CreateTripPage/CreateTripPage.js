import React from "react"
import { useNavigate } from "react-router-dom"
import { IoMdGlobe } from "react-icons/io";
import { useForm } from "../../hooks/useForm"
import {planets} from "../../constants/planet"
import {goToAdminHomePag} from "../../routes/coordinator" 
import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button, MainBoxIntns, Title, FormLogin,  SecaoPlanet  } from "./Styled"

export function CreateTripPage () {

    const navigate = useNavigate()
    

    const dateToday =  new Date().toISOString().split('T')[0]

    const listOfPlanets = planets.map((planet)=>{
        return (
            <option key={planet.id} value={planet.id}>
                {planet}
            </option>
        )
     })

    return (
        <MasterBox>
            <Container>
                <ContainerItens>
                    <Header />
                    <MainBox>
                        <Title>
                            <IoMdGlobe color='black'/>
                                Criar viagens
                            <IoMdGlobe ccolor='black'/>
                        </Title>
                        <FormLogin>
                            <form>
                                <input 
                                    placeholder={"Nome"}
                                    name="name"
                                    
                                    pattern ={"^.{5,}$"}
                                    title = {"O nome da viagem deve ter no mínimo 5 caracteres"}
                                    required
                                />

                                <input 
                                    placeholder={"Descrição"}
                                    name="description"
                                    
                                    required
                                    pattern ={"^.{30,}$"}
                                    title = {"A descrição deve ter no mínimo 30 caracteres"}
                                    
                                />

                                <input 
                                    placeholder={"Duração em dias"}
                                    type={"number"}
                                    name={"durationInDays"}
                                    
                                    required
                                    min={50}
                                />

                                <SecaoPlanet>
                                    <select
                                        placeholder={"Planeta"}
                                        name={"planet"}
                                        defaultValue ={""}
                                        
                                    >
                                    <option value={""}>Escolha um planeta</option>
                                        {listOfPlanets}
                                    </select>
                                        <input
                                            placeholder={"Data"}
                                            type={"date"}
                                            name = {"date"}
                                        
                                            required
                                            min={dateToday}
                                        />
                                </SecaoPlanet>
                                    <ButtonBox>
                                        <Button onClick={() =>goToAdminHomePag(navigate)}> Voltar</Button>
                                        <Button type={"submit"}> Criar</Button>
                                    </ButtonBox>
                            </form>
                        </FormLogin>
                    </MainBox> 
                    <Footer/> 
                </ContainerItens>    
            </Container>    
        </MasterBox>
    )


}