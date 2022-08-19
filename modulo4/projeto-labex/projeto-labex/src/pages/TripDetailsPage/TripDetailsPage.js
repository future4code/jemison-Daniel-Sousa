import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import {useRequestsData} from "../../hooks/useRequestData"


export function TripDetailsPage () {
    useProtectedPage()
    const navigate = useNavigate()
    const tokemId = window.localStorage.getItem('token')
    const tripsList = useRequestsData()

    const [candidates, setCandidates] = useState([])
    const [approvedCandidates, setApprovedCandidates] = useState([])
    const [tripId, setTripId] = useState("")

    const getTripDetail = (id, token) =>{
        axios.get(`${BASE_URL}/trip/${id}`, {
            headers: {
                auth: token,
            }
        }).then((response)=>{
            setCandidates(response.data.trip.candidates)
            setApprovedCandidates(response.data.trip.approved)
        }).catch((error)=>{
            alert("Erro, tente novamente")
        })
    }


    const candidateList = candidates.map((cand)=>{
        return(
            <div>
                <p>{cand.name}</p>
            </div>
        )
    })

    const approvedCandidatesList = approvedCandidates.map((cand) =>{
        return(
            <div>
                <p>{cand.name}</p>
            </div>
        )
    })

    //  useEffect(()=>{getTripDetail(tokemId, tripId.id)}, [tripId])



    return (
        <>
            <p> CONTROLE DE CONDITADOS  </p>
            
            <section>
                <h3> Aprovar</h3>
                <li> {candidateList}</li>
            </section>

            <section>
                <h3> Aprovados</h3>
                <li> {approvedCandidatesList}</li>
            </section>
        </>
    )
}