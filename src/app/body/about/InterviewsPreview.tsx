import React, {Component, ReactNodeArray} from "react";
import styled from "styled-components";
import {AdaptiveText} from "../../components/AdaptiveText";
import {Link} from "../../components/Link";

const SlideDescription = styled.div`
  position: absolute;
  bottom: 0;

  @media (min-width: 850px) {
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

  @media (min-width: 850px) {
    opacity: 0;
    transition: opacity .2s linear;
  }
`

const InterviewImage = styled.div`
  width: 100%;
  position: relative;
  overflow-y: hidden;

  img {
    width: 100%;

    @media (min-width: 850px) {
      height: 100%;
      object-fit: cover;
      display: block;
    }

    @media (max-width: 850px) {
      height: 440px;
      object-position: center;
      object-fit: cover;
    }
  }

  @media (max-width: 850px) {
    height: 440px;
    width: 90%;
    margin: 5% auto;
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
  shortName: string
  fullName: string
}

class InterviewPreview extends Component<InterviewPreviewProps> {
  render() {
    const children = this.props.children as ReactNodeArray // dirty hacky hack. Sorry, i'm not senior govnopochta developer
    return (
      <InterviewImage>
        <Link to={this.props.link}>
          <img src={"/img/interview/" + this.props.shortName + "/main.png"} alt={this.props.fullName}/>
          <OpacityBackground/>
          <SlideDescription>
            <div style={{padding: "15% 10%"}}>
              <AdaptiveText type="subsubheader" weight="heavy_bold" color="primary" lineHeight={1.35}>
                {children[0]}
              </AdaptiveText>
              <div style={{height: "30px"}}/>
              <AdaptiveText type="footnote" weight="normal" color="primary">
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
  column-gap: 4.5%;
  padding: 4% 0;
  margin: 0 auto;

  @media (max-width: 850px) {
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
          <AdaptiveText type="subheader" weight="heavy_bold" color="secondary">Интервью со студентами и
            выпускниками</AdaptiveText>
        </div>
        <InterviewContainer>
          <InterviewPreview link="/arseniy_seroka_topdevelopers" shortName="arseniy" fullName="Arseniy Seroka">
            Арсений Серока: haskell, блокчейн и образование
            <br/>
            Арсений рассказывает об основанном им стартапе Serokell и о своей команде, о связи их работы с
            научными исследованиями, и о спонсируемых Serokell научных и образовательных проектах, среди которых
            Serokell Labs в Университете ИТМО и Serokell Academy.
          </InterviewPreview>
          <InterviewPreview link="/nastya_postnikova" shortName="nastya" fullName="Nastya Postnikova">
            Настя Постникова: от 299 баллов ЕГЭ до стажировки в Google
            <br/>
            На КТ поступают ребята с разным уровнем подготовки, и далеко не все из них олимпиадники. Настя
            рассказала о том, как она выбирала ВУЗ, вливалась в учёбу и стажировалась в Google.
          </InterviewPreview>
          <InterviewPreview link="/sasha_drozdova" shortName="sasha" fullName="Sasha Drozdova">
            Саша Дроздова: IOI, Snapchat и распределённые системы
            <br/>
            Саша рассказывает о том, как к концу третьего курса успела достичь феноменальных успехов в
            спортивном программировании, постажироваться в США и в России и заняться научными исследованиями.
          </InterviewPreview>
        </InterviewContainer>
        <div style={{width: "100%", paddingBottom: "4%"}}>
          <Link to="/interviews">
            <AllInterviewsButton>
              <AdaptiveText type="subsubheader" weight="heavy_bold" color="secondary" capitalize>
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