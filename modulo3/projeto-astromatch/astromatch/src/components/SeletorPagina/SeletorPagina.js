import React, { useEffect, useState } from 'react'
import { Home } from '../HomeInicial/Home'
import { HomeMatches } from '../HomeMatches/HomeMatches'
import axios from 'axios'

//Importação das urls
import {getProfile, getMatches, postChoose, putClear} from '../../constants/Constants'


export function SeletorPagina () {
    const [profileList, setProfileList] = useState([{}]) // lista de perfis
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
                    GetMatches = {GetMatches}
                    initialList = {initialList}
                    LikeButton = {LikeButton}
                    DislikeButton = {DislikeButton}
                    PUTClear  = {PUTClear }
                />
          )
        } else if(!changeScreen){
            return (
                <HomeMatches
                    TrocaDeTela ={TrocaDeTela}
                    profileList = {profileList}
                    PUTClear  = {PUTClear }
                />
            )
        }else {
            (
                <Home
                    TrocaDeTela ={TrocaDeTela}
                
                />
            )}
    }

     //Funcção que busca os perfis na api
    const GETProfile = () => {
        axios.get(getProfile) // Esse parametro está foi importado da pasta constants
        .then((response) =>{
            setInitialList(response.data.profile)
        }).catch((error) =>{
            alert("Tente novamente")
        })
    }

    const GetMatches = () =>{
        axios.get(getMatches)
        .then((response) =>{
            setProfileList(response.data.profile)
            setChangeScreen(false)
        }).catch((error) =>{
            alert("Tente novamente")
        })
    }

    const PUTClear = () =>{
        axios.put(putClear)
        .then((response) =>{
            GetMatches()
        }).catch((error) =>
            alert("Tente novamente")
        )

    }

    const POSTChoose = () =>{
        axios.post(postChoose, {
            "id": profileList.id,
	        "choice": true
        })
        .then((response) =>{
            GETProfile()
        }).catch((error) =>{
            alert("Tente novamente")
        })
    }

    useEffect(() =>{
        GETProfile()
        //Teste entender como funciona
    }, [])




    const LikeButton = () =>{
        POSTChoose()
    }

    const DislikeButton = () =>{
        GETProfile()
    }

    return (
        <div>
           {ScreenChange()}
        </div>
    )



}