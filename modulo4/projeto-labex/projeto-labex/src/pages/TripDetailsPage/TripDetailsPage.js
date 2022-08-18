import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import {useRequestsData} from "../../hooks/useRequestData"

export function TripDetailsPage () {
    useProtectedPage()
    const navigate = useNavigate()
    const [id] =useParams()

    const [getTripDetail, seGgetTripDetail] = useRequestsData(`/trips${id}`)

    return (
        <>
            <p> TripDetailsPage</p>
        </>
    )
}