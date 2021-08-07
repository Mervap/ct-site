import React, {Component} from 'react';
import './App.css';
import Header from "./header/Header";
import About from "./body/about/About";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom"
import Footer from "./footer/Footer";
import {Placeholder} from "./components/Placeholder";
import Interview from "./body/interview/Interview";
import InterviewList from "./body/interview/interviewList/InterviewList";

const AppContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
`

class AppWithoutTotalBackground extends Component {
  render() {
    return (
      <AppContainer>
        <Header/>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/interviews"><InterviewList/></Route>
          <Route path="/interviews/:name" render={props => <Interview name={props.match.params.name}/>} />
          <Placeholder type="header" weight="bold" textColor="secondary">
            NOT IMPLEMENTED
            <br/>
            {window.location.pathname}
          </Placeholder>
        </Switch>
        <Footer/>
      </AppContainer>
    )
  }
}

interface TotalBackgroundImageProps {
  backgroundImage: string
}

const TotalBackgroundImage = styled.div<TotalBackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-image: url(${p => p.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

class AppWithTotalBackground extends Component<TotalBackgroundImageProps> {
  render() {
    return (
      <TotalBackgroundImage {...this.props}>
        <AppWithoutTotalBackground/>
      </TotalBackgroundImage>
    )
  }
}

function App() {
  return (
    <Switch>
      <Route exact path="/" render={(_) => (
        <AppWithTotalBackground backgroundImage="/img/about/gk.jpg"/>
      )}/>
      <Route exact path="/interviews" render={(_) => (
        <AppWithTotalBackground backgroundImage="/img/interviews/desktop.png"/>
      )}/>
      <AppWithoutTotalBackground/>
    </Switch>
  );
}

export default App;
