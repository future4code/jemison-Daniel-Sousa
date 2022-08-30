import styled from "styled-components";

export const MasterBox = styled.div `
  display: flex;
  justify-content: center;
 
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box; 


    
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 100vh;
  width: 23rem;
  background-color: white;
  border: solid 3px #323238;
  border-radius: 10px;
  padding: 0.5rem;

  

`

export const ContainerItens = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  
  height: 100%;
  
  border: 1px solid black;
  border-radius: 8px;
  text-align: center;

  padding: 0.5rem;
  
`

export const MainBox = styled.div `
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid;
  border-radius: 8px;
  height: 50rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
  img{
    width: 10rem;
  }
`


export const Title = styled.h1 `
  display: flex;
  align-items: center;
  gap: 0.2rem;
  border-bottom: 1px solid black;
  font-weight: bolder;
  color: #00875f;

`
export const FormLogin = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  form{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label{
    display: flex;
    font-weight: bolder;
    color: #00875f;
    
  }

  input{
    padding: 0.3rem;
    border-radius: 8px;
    text-align: start;
    
  }
`

export const ButtonBox = styled.section `
  display: flex;
  gap: 1rem;
  justify-content: center;

`
export const Button = styled.button `
    width: 6rem;
    padding: 0.3rem;
    border-radius: 8px;
    background-color: transparent;
    color: #000000;
    cursor: pointer;

    :hover{
      color: #00875f;
      font-weight: bolder;
      background-color: #000000;
    }
`

export const SecaoPlanet = styled.section `
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  select{
    padding: 0.3rem;
    border-radius: 8px;
    text-align: start;
    border-radius: 8px;
  }
`