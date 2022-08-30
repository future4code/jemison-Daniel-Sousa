import React from "react"
import { useNavigate } from "react-router-dom";
import {MainFooter} from "./Styled"
import { IoFingerPrintSharp} from "react-icons/io5";
import { FcPrevious } from "react-icons/fc";
import {  BsPersonFill} from "react-icons/bs";
import {goUut, goToLoginPage} from "../../routes/coordinator"

export function Footer () {
    const navigate = useNavigate()
    return (
        <MainFooter>
                <FcPrevious
                    onClick={()=> goUut(navigate)} size={30}
                />
                <section>
                    <IoFingerPrintSharp size={30} />
                </section>
                <BsPersonFill onClick={()=> goToLoginPage(navigate)} 
                    size={30} color="#07a2ff"
                />
        </MainFooter>
    )



}