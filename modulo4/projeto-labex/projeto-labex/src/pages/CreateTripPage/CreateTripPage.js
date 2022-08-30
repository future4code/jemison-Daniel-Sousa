import React from "react"
import { useNavigate } from "react-router-dom"
import { IoMdGlobe } from "react-icons/io";
import { useForm } from "../../hooks/useForm"
import {useRequestsData} from "../../hooks/useRequestData"
import {createTrip} from "../../services/requestsPost"
import {planets} from "../../constants/planet"
import {goToAdminHomePag} from "../../routes/coordinator" 
import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"
import {MasterBox, ButtonBox, Container, ContainerItens, MainBox,Button, Title, FormLogin,  SecaoPlanet  } from "./Styled"

export function CreateTripPage () {

    const navigate = useNavigate()
    const [tripsData, getTripsData] = useRequestsData("trips", {})
    const { form, onChange, functionClear } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })
    
    const dateToday =  new Date().toISOString().split('T')[0]

    const listOfPlanets = planets.map((planet)=>{
        return (
            <option key={planet} value={planet}>
                {planet}
            </option>
        )
     })

     const onClickCreate = (e) => {
        e.preventDefault();
        createTrip(form, functionClear, getTripsData)
    }

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
                            <form onSubmit={onClickCreate}>
                                <input 
                                    placeholder={"Nome"}
                                    name="name"
                                    value={form.mane}
                                    onChange ={onChange}
                                    pattern ={"^.{5,}$"}
                                    title = {"O nome da viagem deve ter no mínimo 5 caracteres"}
                                    required
                                />

                                <input 
                                    placeholder={"Descrição"}
                                    name="description"
                                    value={form.description}
                                    onChange ={onChange}
                                    required
                                    pattern ={"^.{30,}$"}
                                    title = {"A descrição deve ter no mínimo 30 caracteres"}
                                    
                                />

                                <input 
                                    placeholder={"Duração em dias"}
                                    type={"number"}
                                    name={"durationInDays"}
                                    value={form.durationInDays}
                                    onChange ={onChange}
                                    required
                                    min={50}
                                />

                                <SecaoPlanet>
                                    <select
                                        placeholder={"Planeta"}
                                        name={"planet"}
                                        defaultValue ={""}
                                        onChange={onChange}
                                        required
                                    
                                    >
                                    <option value={""}>Escolha um planeta</option>
                                        {listOfPlanets}
                                    </select>
                                        <input
                                            placeholder={"Data"}
                                            type={"date"}
                                            name = {"date"}
                                            value={form.date}
                                            onChange={onChange}
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