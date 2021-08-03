import React, {Component, ReactNodeArray} from "react";
import styled from "styled-components";
import {AdaptiveText} from "../../components/AdaptiveText";
import {Link} from "../../components/Link";

const blockMaxWidthRender = 950 //px

const SlideDescription = styled.div`
  position: absolute;
  bottom: 0;

  @media (min-width: ${blockMaxWidthRender}px) {
    bottom: -20%;
    opacity: 0;
    transition: bottom .2s linear, opacity .2s linear;
  }
`

const OpacityBackground = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.60);

  @media (min-width: ${blockMaxWidthRender}px) {
    opacity: 0;
    transition: opacity .2s linear;
  }
`

const InterviewImage = styled.div`
  width: 100%;
  position: relative;
  overflow-y: hidden;
  min-height: 440px;

  img {
    width: 100%;
    min-height: 440px;

    @media (min-width: ${blockMaxWidthRender}px) {
      height: 100%;
      object-fit: cover;
      display: block;
    }

    @media (max-width: ${blockMaxWidthRender}px) {
      object-position: center;
      object-fit: cover;
    }
  }

  @media (max-width: ${blockMaxWidthRender}px) {
    height: 440px;
    width: 90%;
    margin: 0 auto 5% auto;
    overflow-y: hidden;
  }

  :hover {
    ${SlideDescription} {
      bottom: 0;
      opacity: 1;
    }

    ${OpacityBackground} {
      opacity: 1;
    }
  }
`

interface InterviewPreviewProps {
  link: string
  fullName: string
}

class InterviewPreview extends Component<InterviewPreviewProps> {

  state = {
    isLargeCanvas: false
  }

  recalcIsLargeCanvas = () => {
    const isLargeCanvas = 425 <= window.innerWidth && window.innerWidth <= blockMaxWidthRender
    this.setState({isLargeCanvas: isLargeCanvas})
  }

  resizeListener = (_: Event) => {
    this.recalcIsLargeCanvas()
  }

  componentDidMount() {
    this.recalcIsLargeCanvas()
    window.addEventListener("resize", this.resizeListener)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeListener)
  }

  render() {
    const children = this.props.children as ReactNodeArray // dirty hacky hack. Sorry, i'm not senior govnopochta developer
    const isLargeCanvas = this.state.isLargeCanvas
    return (
      <InterviewImage>
        <Link to={this.props.link}>
          <img src={"/img/interview" + this.props.link + "/main.png"} alt={this.props.fullName}/>
          <OpacityBackground/>
          <SlideDescription>
            <div style={{padding: "15% 10%"}}>
              <AdaptiveText type={isLargeCanvas ? "subheader" : "heavy_main_text"} weight="heavy_bold" textColor="primary" lineHeight={1.35}>
                {children[0]}
              </AdaptiveText>
              <div style={{height: "30px"}}/>
              <AdaptiveText type={isLargeCanvas ? "main_text" : "heavy_footnote"} weight="normal" textColor="primary">
                {children[2]}
              </AdaptiveText>
            </div>
          </SlideDescription>
        </Link>
      </InterviewImage>
    );
  }
}

const InterviewContainer = styled.div`
  display: grid;
  width: 90%;
  max-width: 1200px;
  grid-template-columns: 30% 30% 30%;
  grid-auto-rows: 1fr;
  column-gap: 2.5%;
  row-gap: 2.5%;
  padding: 4% 0;
  margin: 0 auto;

  @media (max-width: ${blockMaxWidthRender}px) {
    display: block;
  }
`

const AllInterviewsButton = styled.div`
  text-align: center;
  height: 60px;
  padding: 0 3%;
  margin: 0 auto;
  border: 3px solid #000000;
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
`

class InterviewsPreview extends Component {
  render() {
    return (
      <div style={{backgroundColor: "white"}}>
        <div style={{textAlign: "center", width: "100%", paddingTop: "4%"}}>
          <AdaptiveText type="subheader" weight="heavy_bold" textColor="secondary">Интервью со студентами и
            выпускниками</AdaptiveText>
        </div>
        <InterviewContainer>
          <InterviewPreview link="/arseniy_seroka_topdevelopers" fullName="Arseniy Seroka">
            Арсений Серока: haskell, блокчейн и образование
            <br/>
            Арсений рассказывает об основанном им стартапе Serokell и о своей команде, о связи их работы с
            научными исследованиями, и о спонсируемых Serokell научных и образовательных проектах, среди которых
            Serokell Labs в Университете ИТМО и Serokell Academy.
          </InterviewPreview>
          <InterviewPreview link="/nastya_postnikova" fullName="Nastya Postnikova">
            Настя Постникова: от 299 баллов ЕГЭ до стажировки в Google
            <br/>
            На КТ поступают ребята с разным уровнем подготовки, и далеко не все из них олимпиадники. Настя
            рассказала о том, как она выбирала ВУЗ, вливалась в учёбу и стажировалась в Google.
          </InterviewPreview>
          <InterviewPreview link="/sasha_drozdova" fullName="Sasha Drozdova">
            Саша Дроздова: IOI, Snapchat и распределённые системы
            <br/>
            Саша рассказывает о том, как к концу третьего курса успела достичь феноменальных успехов в
            спортивном программировании, постажироваться в США и в России и заняться научными исследованиями.
          </InterviewPreview>
        </InterviewContainer>
        <div style={{width: "100%", paddingBottom: "4%"}}>
          <Link to="/interviews">
            <AllInterviewsButton>
              <AdaptiveText type="subsubheader" weight="heavy_bold" textColor="secondary" capitalize>
                Все интервью
              </AdaptiveText>
            </AllInterviewsButton>
          </Link>
        </div>
      </div>
    );
  }
}

export default InterviewsPreview