import React from "react";
import { BoxMaster, MainHeader, HeaderButton, SectionMenu } from "./Styled";




export function Header () {

        return (
                <BoxMaster>
                        

                        <MainHeader>
                                <section>
                                        <h1> Aqui logo</h1>
                                </section>
                                <SectionMenu>
                                        <HeaderButton> 
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