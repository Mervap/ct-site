import {Component} from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${p => p.theme.backgroundColor};
  position: relative;
`

interface GradientImgProps {
  offset: number;
}

const GradientImg = styled.div<GradientImgProps>`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;

  @media (max-width: 800px) {
    left: ${p => p.offset}px;
  }
`

class GeneralInfo extends Component {

  state = {
    currentGradientOffset: 0
  }

  private recalcGradientOffset() {
    const offset = -350 + window.innerWidth / 2
    this.setState({currentGradientOffset: offset})
  }

  componentDidMount() {
    this.recalcGradientOffset()
    window.addEventListener("resize", _ => {
      this.recalcGradientOffset()
    })
  }

  render() {
    return (
      <InfoContainer>
        <GradientImg offset={this.state.currentGradientOffset}>
          <img src="Rectangle.svg" alt=""/>
        </GradientImg>
      </InfoContainer>
    );
  }
}


export default GeneralInfo;