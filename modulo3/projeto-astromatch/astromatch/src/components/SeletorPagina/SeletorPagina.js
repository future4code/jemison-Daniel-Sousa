import React, { useEffect, useState } from 'react'
import { Home } from '../HomeInicial/Home'
import { HomeMatches } from '../HomeMatches/HomeMatches'
import axios from 'axios'

//Importação das urls
import {getProfile, getMatches, postChoose, putClear, } from '../../constants/Constants'


export function SeletorPagina () {
    const  [changeScreen, setChangeScreen] = useState(true) // Estado para troca de tela  usando renderização condicional 

    const [listaInicial, setListaInicial] = useState({})

    const [listaMacthes, setlistaMacthes] = useState([])

    
    const TrocaDeTela = ()  => {
        setChangeScreen(!changeScreen)
    }



    //Funcção Troca de Tela - Renderização condicional
    const ScreenChange = () =>{
        if(changeScreen) {
          return  (
                <Home
                    TrocaDeTela ={TrocaDeTela}
                    listaInicial ={listaInicial}
                    matchesList = {matchesList}
                    likebutton = {likebutton}
                    dislikeButton = {dislikeButton}
                    setChangeScreen = {setChangeScreen}
                />
          )
        } else if(!changeScreen){
            return (
                <HomeMatches
                    TrocaDeTela ={TrocaDeTela}
                    listaMacthes ={listaMacthes}
                    clearMatches = {clearMatches}
                    setChangeScreen = {setChangeScreen}
                />
            )
        }else {
            (
                <Home
                    TrocaDeTela ={TrocaDeTela}
                
                />
            )}
    }

    //Função busca perfis

    const searchProfiles = () =>{
        axios.get(getProfile)
        .then((response) =>{
            setListaInicial(response.data.profile)

        })
        .catch((error) =>{
            alert("Tente novamente")
        })
    }






    //Função lista os matches nos perfis
    const likeMatches = () =>{
        axios.post(postChoose, 
            {
                    "id": listaInicial.id,
                    "choice": true
            }
        )
        .then((response)=>{
            searchProfiles()
        })
        .catch((error) =>{
            alert("Error")
        })
    }

    const matchesList =() =>{
        axios.get(getMatches)
        .then((response) =>{
            setlistaMacthes(response.data.matches)
            setChangeScreen(false)
            
        })
        .catch((error) =>{
            alert("Erro!")
        })
    }

    const clearMatches = () =>{
        axios.put(putClear)
        .then((response)=>{
            alert("Lista limpa!")
            matchesList()
        })

        .catch((error) =>{
            alert("Erro tente novamente")
        })
    }
    

    useEffect(() =>{
        searchProfiles()
    }, [])


    const likebutton = () =>{
        likeMatches()
    }
    
    const dislikeButton = () =>{
        searchProfiles()
    }

    


    return (
        <div>
           {ScreenChange()}
        </div>
    )



}