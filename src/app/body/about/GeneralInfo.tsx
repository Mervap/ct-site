import {Component} from "react";
import styled from "styled-components";
import ImageSet from "./ImageSet";
import {AdaptiveText, AdaptiveTextProps} from "../../components/AdaptiveText";

const InfoContainer = styled.div`
  width: 100%;
  @media (max-height: 100vw) {
    min-height: 100vh;
  }
  
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${p => p.theme.backgroundColor.primary};
`

interface DownhillImgProps {
  offset: number;
}

const DownhillImg = styled.div<DownhillImgProps>`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;

  @media (max-width: 800px) {
    left: ${p => p.offset}px;
  }
`

interface TextProps extends AdaptiveTextProps {
  paddingTop: number;
}

const Text = styled(AdaptiveText)<TextProps>`
  padding-left: 30px;
  max-width: 512px;
  padding-top: ${p => p.paddingTop}px;

  @media (max-width: 950px) {
    max-width: 600px;
    padding-top: ${p => p.paddingTop * 2 / 3}px;
  }

  @media (max-width: 650px) {
    max-width: 90%;
    padding-top: ${p => p.paddingTop / 2}px;
  }
`

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;

  @media (max-width: 950px) {
    display: block;
    padding-top: 70px;
  }

  @media (max-width: 650px) {
    padding-top: 45px;
  }
`

const MainDescription = styled.div`
  @media (min-width: 950px) {
    padding-top: 35px;
    padding-right: 50px;
  }

  @media (max-width: 950px) {
    display: table;
    margin: 0 auto;
  }
`

const LogoImg = styled.img`
  width: 360px;

  @media (max-width: 500px) {
    width: 300px;
  }
`

class GeneralInfo extends Component {

  state = {
    currentGradientOffset: 0
  }

  recalcGradientOffset = () => {
    const offset = -350 + window.innerWidth / 2
    this.setState({currentGradientOffset: offset})
  }

  resizeListener = (_: Event) => {
    this.recalcGradientOffset()
  }

  componentDidMount() {
    this.recalcGradientOffset()
    window.addEventListener("resize", this.resizeListener)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeListener)
  }

  render() {
    return (
      <InfoContainer>
        <DownhillImg offset={this.state.currentGradientOffset}>
          <img src={"/img/about/downhill.svg"} alt=""/>
        </DownhillImg>
        <DescriptionContainer>
          <MainDescription>
            <LogoImg src={"/img/about/logo.png"} alt="ITMO University"/>
            <Text type="header" weight="bold" color="primary" paddingTop={20}>Кафедра КТ</Text>
            <Text type="heavy_main_text" weight="normal" color="primary" paddingTop={35}>
              Место, где опытные преподаватели и сотрудники ведущих IT-компаний
              готовят будущих разработчиков, аналитиков и исследователей в области компьютерных наук
            </Text>
            <Text type="heavy_footnote" weight="light_bold" color="primary" paddingTop={140}>
              Факультет информационных технологий и программирования
              <br/>
              Направление 01.03.02 Прикладная математика и информатика
            </Text>
          </MainDescription>
          <ImageSet/>
        </DescriptionContainer>
      </InfoContainer>
    );
  }
}


export default GeneralInfo;