import React from 'react';
import './App.css';
import Header from "./header/Header";
import About from "./body/about/About";
import styled from "styled-components";

const AppContainer = styled.div`
  background-image: url("gk.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <About />
    </AppContainer>
  );
}

export default App;
