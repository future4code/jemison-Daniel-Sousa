import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import {AdminHomePag} from "../pages/AdminHomePage/AdminHomePage"
import { ApplicationFormPage } from "../pages/ApplicationFormPage/ApplicationFormPage"
import {LoginPage } from "../pages/LoginPage/LoginPage"
import { ListTripsPage } from "../pages/ListTripsPage/ListTripsPage"
import { CreateTripPage } from "../pages/CreateTripPage/CreateTripPage"
import { TripDetailsPage } from "../pages/TripDetailsPage/TripDetailsPage"
import { PageError } from "../pages/PageError/Pageerror"

export function Router (){
    return (
        <BrowserRouter>
            <Routes>
                <Route index element = {<HomePage/>}/>

                <Route path="/ListTripsPage" element ={<ListTripsPage />} />

                <Route path="/ApplicationFormPage" element= {<ApplicationFormPage />} />

                <Route  path ="/LoginPage" element={<LoginPage/>}/>

                <Route path="/AdminHomePag" element={<AdminHomePag />} />

                <Route path="/CreateTripPage" element={<CreateTripPage/>} />

                <Route path="/TripDetailsPage" element={<TripDetailsPage/>} />

                <Route path="*" element={<PageError/>} />



            </Routes>
        </BrowserRouter>
    )



}