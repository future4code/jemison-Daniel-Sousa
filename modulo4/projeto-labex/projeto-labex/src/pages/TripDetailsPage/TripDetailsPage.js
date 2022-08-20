import axios from "axios"
import React from "react"
import { useNavigate, useParams} from "react-router-dom"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import {useRequestsData} from "../../hooks/useRequestData"


export function TripDetailsPage () {
     useProtectedPage()
    


    return (
        <>
            <p> CONTROLE DE CONDITADOS  </p>
            
            <section>
                <h3> Aprovar</h3>
                
            </section>

            <section>
                <h3> Aprovados</h3>
                
            </section>
        </>
    )
}