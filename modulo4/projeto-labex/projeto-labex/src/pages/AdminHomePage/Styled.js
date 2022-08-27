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
  height: 26rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  
  h1{
    padding: 0.5rem;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    gap: 0.2rem;
  }
`
export const SectionTrip = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    gap: 0.5rem;
    height: 100%;
    padding: 0.4rem;

    overflow-y: scroll ;
`

export const CarTrip = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.6rem;
  width: 100%;
  box-shadow: 3px 5px 5px 0px rgba(0,0,0,0.75);

  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;

  p{
    text-align: left;
    font-weight: bold;
  }

  span{
    font-weight: bold;
    color: #00875f;
    margin-right: 0.2rem;
  }

`

export const ButtonBox = styled.section `
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.1rem;
`
export const Button = styled.button `
    padding: 0.3rem;
    border-radius: 8px;
    background-color: transparent;
    color: #000000;
    cursor: pointer;

    :hover{
      color: #000000;
      font-weight: bolder;
      background-color: #00875f;
    }
`

export const ButtonBoxCard = styled.section `
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;

`
export const ButtonCard = styled.button `
    display: flex;
    align-items: center;
    padding: 0.3rem;
    border-radius: 8px;
    margin-top: 0.3rem;
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;

    :hover{
      color: #000000;
      font-weight: bolder;
      background-color: #00875f;
    }
`