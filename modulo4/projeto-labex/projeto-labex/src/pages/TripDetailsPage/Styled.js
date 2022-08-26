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
  
  
  border: 1px solid black;
  border-radius: 8px;
  text-align: center;

  padding: 0.6rem;
  
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
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
  img{
    width: 10rem;
  }
`
export const SectionTrip = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
    width: 100%;
    max-height: 75%;
    padding: 0.5rem;

    overflow-x: hidden;
    overflow-y: scroll ;
   

`

export const CarTrip = styled.section `
  display: flex;
  flex-direction: column;
  justify-content:left;
  align-items:flex-start;
  text-align:left;
  gap: 0.1rem;
  padding: 0.1rem;
  flex-wrap: nowrap;
  width: 100%;
  box-shadow: 3px 5px 5px 0px rgba(0,0,0,0.75);

  border: 1px solid black;
  border-radius: 8px;


  span{
    font-weight: bold;
    color: #00875f;
    margin-right: 0.1rem;
    text-align:left;
  }

  p{
    font-size: 0.8rem;
  }


`
export const CarTripAprove = styled.section `
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:flex-start;
  text-align:left;
  gap: 0.1rem;
  padding: 0.5rem;
  flex-wrap: nowrap;
  width: 100%;
  box-shadow: 3px 5px 5px 0px rgba(0,0,0,0.75);

  border: 1px solid black;
  border-radius: 8px;


  span{
    font-weight: bold;
    color: #00875f;
    margin-right: 0.1rem;
    text-align:left;
  }

  p{
    font-size: 0.8rem;
  }


`

export const ButtonBox = styled.section `
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;

`
export const ButtonApprove = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    border-radius: 8px;
    background-color: transparent;
    color: #000000;
    cursor: pointer;

    :hover{
      color: #ffffff;
      font-weight: bolder;
      background-color: #00875f;
    }
`

export const ButtonRepprove = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    border-radius: 8px;
    background-color: transparent;
    color: #000000;
    cursor: pointer;

    :hover{
      color: #ffffff;
      font-weight: bolder;
      background-color: red;
    }
`