import React, { useEffect, useState } from 'react'
import { Home } from '../HomeInicial/Home'
import { HomeMatches } from '../HomeMatches/HomeMatches'
import axios from 'axios'

//Importação das urls
import {getProfile, getMatches, postChoose, putClear} from '../../constants/Constants'


export function SeletorPagina () {
    const  [changeScreen, setChangeScreen] = useState(true) // Estado para troca de tela  usando renderização condicional 

    const [listaInicial, setListaInicial] = useState([])

    

    
    const TrocaDeTela = ()  => {
        setChangeScreen(!changeScreen)
    }



    //Funcção Troca de Tela - Renderização condicional
    const ScreenChange = () =>{
        if(changeScreen) {
          return  (
                <Home
                    TrocaDeTela ={TrocaDeTela}
                    listaInicial = {listaInicial}
                    
                    
                />
          )
        } else if(!changeScreen){
            return (
                <HomeMatches
                    TrocaDeTela ={TrocaDeTela}
                    
                />
            )
        }else {
            (
                <Home
                    TrocaDeTela ={TrocaDeTela}
                
                />
            )}
    }

     // Pega perfil na api
    const GetProfile  = () =>{
        axios.get(getProfile).then((reponse) =>{
            setListaInicial(reponse.data.profile)
        }).catch((error) => {
            alert("Erro!")
        })
    }

    // Mostra os perfis que deram like
    const PostChoose = () =>{
        axios.post(postChoose, {
            "id": listaInicial.id,
            "choice": true
        }).then((reponse)=>{
            GetProfile ()
        }).catch((error) =>{
            alert("Error")
        })
    }


    return (
        <div>
           {ScreenChange()}
        </div>
    )



}