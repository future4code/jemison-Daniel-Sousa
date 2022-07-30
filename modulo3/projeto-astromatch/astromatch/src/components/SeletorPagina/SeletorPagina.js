import React, { useEffect, useState } from 'react'
import { Home } from '../HomeInicial/Home'



export function SeletorPagina () {
    const [profileList, setProfileList] = useState([]) // lista de perfis
    const  [changeScreen, setChangeScreen] = useState(true) // Estado para troca de tela  usando renderização condicional 
    const [initialList, setInitialList] = useState([]) //Estado para a lista incial da api

    //Funcção Troca de Tela - Renderização condicional
    const ScreenChange = () =>{
        if(changeScreen) {
          return  
        } else if(!changeScreen){
            return
        }else{

        }
    }





    return (
        <>
            <Home/>
        </>
    )



}