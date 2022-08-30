import React from "react";
import {Container} from "./Styled"


export function CarLoading () {

    return (
        <Container>
            <div className="ring one"></div>
            <div className="ring two"></div>
            <div className="ring three"></div>
            <span>Carregando...</span>
        </Container>
    )



}