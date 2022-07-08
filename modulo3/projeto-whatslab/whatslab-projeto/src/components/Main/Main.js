import { useState } from 'react'
import {Sidebar,ContinerPrincipal,ConteudoPrincipal, } from './StyleMain'



export function Main (){
    
        
    
    return (
        <ContinerPrincipal>
            <Sidebar> Sidebar</Sidebar>
            
            <ConteudoPrincipal>
                <form>
                    <label>Destinatatio</label>
                    <input
                        placeholder='Destinatario..'
                    />

                    <input
                        placeholder='Digite sua mensagem...'
                    
                    />

                    <button>Enviar</button>
                </form>

                
            </ConteudoPrincipal>
        </ContinerPrincipal>
    )
}