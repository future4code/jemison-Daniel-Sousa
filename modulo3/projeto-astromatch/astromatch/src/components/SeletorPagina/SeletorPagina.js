import React, { useEffect, useState } from 'react'
import { Home } from '../HomeInicial/Home'
import { HomeMatches } from '../HomeMatches/HomeMatches'



export function SeletorPagina () {
    const [profileList, setProfileList] = useState([]) // lista de perfis
    const  [changeScreen, setChangeScreen] = useState(true) // Estado para troca de tela  usando renderização condicional 
    const [initialList, setInitialList] = useState([]) //Estado para a lista incial da api

    
    const TrocaDeTela = ()  => {
        setChangeScreen(!changeScreen)
    }



    //Funcção Troca de Tela - Renderização condicional
    const ScreenChange = () =>{
        if(changeScreen) {
          return  (
                <Home
                    TrocaDeTela ={TrocaDeTela}
                
                />
          )
        } else if(!changeScreen){
            return (
                <HomeMatches
                    TrocaDeTela ={TrocaDeTela}
                
                />
            )
        }else{
            (
                <Home
                    TrocaDeTela ={TrocaDeTela}
                
                />
            )

        }
    }





    return (
        <div>
           {ScreenChange()}
        </div>
    )



}