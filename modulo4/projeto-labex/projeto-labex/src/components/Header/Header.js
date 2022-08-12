import React from "react";

import {useNavigate } from "react-router-dom";
import { BoxMaster, MainHeader, HeaderButton, SectionMenu } from "./Styled";
import {goToLoginPage} from "../../routes/coordinator"



export function Header () {

        const navigate = useNavigate()

        return (
                <BoxMaster>
                          <MainHeader>
                                <section>
                                        <h1> Labex</h1>
                                </section>
                                <SectionMenu>
                                <HeaderButton 
                                         onClick={()=>goToLoginPage(navigate)}> 
                                                 login
                                        </HeaderButton>
                                        
                                        <HeaderButton>
                                             Sobre
                                        </HeaderButton>
                                </SectionMenu>
                                
                        </MainHeader>
                </BoxMaster>
        )



}