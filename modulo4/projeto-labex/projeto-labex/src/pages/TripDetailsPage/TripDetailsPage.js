import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import {useRequestsData} from "../../hooks/useRequestData"

export function TripDetailsPage () {
    // useProtectedPage()
    const navigate = useNavigate()
    const {id} = useParams()

     const [getTripDetail, setGetTripDetail] = useRequestsData(`/trips/${id}`)

     const lisTripDetail = getTripDetail && getTripDetail.map((item)=>{
        return (
            <h1>{item.name}</h1>
        )
     })

    return (
        <>
            <p> TripDetailsPage</p>
            {lisTripDetail}
        </>
    )
}