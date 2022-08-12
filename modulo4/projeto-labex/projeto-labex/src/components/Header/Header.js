import React from "react";
import {useNavigate } from "react-router-dom";
import { BoxMaster, MainHeader, HeaderButton, SectionMenu } from "./Styled";

import {goToAdminHomePag} from "../../routes/coordinator"



export function Header () {

        const navigate = useNavigate()

        return (
                <BoxMaster>
                        

                        <MainHeader>
                                <section>
                                        <h1> Aqui logo</h1>
                                </section>
                                <SectionMenu>
                                        <HeaderButton onClick={()=>goToAdminHomePag(navigate)}> 
                                            Inscrever-se
                                        </HeaderButton>
                                        <HeaderButton>
                                             Sobre
                                        </HeaderButton>
                                </SectionMenu>
                                
                        </MainHeader>
                </BoxMaster>
        )



}