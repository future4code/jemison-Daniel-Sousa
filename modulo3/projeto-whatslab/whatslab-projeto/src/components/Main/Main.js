import { useState } from 'react'
import {Sidebar,ContinerPrincipal,ConteudoPrincipal, } from './StyleMain'
import {InputDestinatario,InputMensagem, BotaoEnviar} from '../SecaoMensagem/StyleMensagem'


export function Main (){
    
        
    
    return (
        <ContinerPrincipal>
            <Sidebar> Sidebar</Sidebar>
            <ConteudoPrincipal>
                <InputDestinatario placeholder='Destinatario...'/>
                <InputMensagem placeholder='Digite sua mensagem...'/>
                <BotaoEnviar>Enviar</BotaoEnviar>
            </ConteudoPrincipal>
        </ContinerPrincipal>
    )
}