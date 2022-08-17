import React from "react";
import {Router} from "./routes/Router"
import styled from "styled-components";
import GlobalStyle from './GlobalStyled'

const MainBox = styled.div `
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 50vw;

  border: 2px solid black;

`


function App() {

  return (
    <MainBox>
      <GlobalStyle/>
      <Router/>
    </MainBox>
  );
}

export default App;
