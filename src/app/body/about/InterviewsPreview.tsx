import React, {Component} from "react";
import styled from "styled-components";
import {AdaptiveText} from "../../components/AdaptiveText";
import {Link} from "../../components/Link";
import InterviewPreviewCollector, {
  InterviewInfo,
  previewBlockMaxWidth
} from "../../components/InterviewPreviewCollector";
import ResizeHandler from "../../components/ResizeHandler";

const SlideDescription = styled.div`
  position: absolute;
  bottom: 0;

  @media (min-width: ${previewBlockMaxWidth}px) {
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

  @media (min-width: ${previewBlockMaxWidth}px) {
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

    @media (min-width: ${previewBlockMaxWidth}px) {
      height: 100%;
      object-fit: cover;
      display: block;
    }

    @media (max-width: ${previewBlockMaxWidth}px) {
      object-position: center;
      object-fit: cover;
    }
  }

  @media (max-width: ${previewBlockMaxWidth}px) {
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

class InterviewPreview extends ResizeHandler<InterviewInfo> {

  state = {
    isLargeCanvas: false
  }

  protected onResize(width: number, height: number) {
    const isLargeCanvas = 425 <= width && width <= previewBlockMaxWidth
    this.setState({isLargeCanvas: isLargeCanvas})
  }

  render() {
    const isLargeCanvas = this.state.isLargeCanvas
    return (
      <InterviewImage>
        <Link to={'/interviews/' + this.props.name}>
          <img src={"/img/interviews/" + this.props.name + "/preview.png"}
               alt={this.props.name.replace("_", " ")}/>
          <OpacityBackground/>
          <SlideDescription>
            <div style={{padding: "15% 10%"}}>
              <AdaptiveText type={isLargeCanvas ? "subheader" : "heavy_main_text"} weight="heavy_bold"
                            textColor="primary" lineHeight={1.35}>
                {this.props.header}
              </AdaptiveText>
              <div style={{height: "30px"}}/>
              <AdaptiveText type={isLargeCanvas ? "main_text" : "heavy_footnote"} weight="normal" textColor="primary">
                {this.props.description}
              </AdaptiveText>
            </div>
          </SlideDescription>
        </Link>
      </InterviewImage>
    );
  }
}

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

class InterviewsPreviewWithoutButton extends InterviewPreviewCollector {

  fetchAll = false;

  renderHeader(): React.ReactNode {
    return (
      <div style={{textAlign: "center", width: "100%", paddingTop: "4%", backgroundColor: "white"}}>
        <AdaptiveText type="subheader" weight="heavy_bold" textColor="secondary">
          Интервью со студентами и выпускниками
        </AdaptiveText>
      </div>
    )
  }

  renderPreview(info: InterviewInfo, key: number): React.ReactNode {
    return <InterviewPreview key={key} {...info} />
  }
}

class InterviewsPreview extends Component {

  render() {
    return (
      <div style={{backgroundColor: "white"}}>
        <InterviewsPreviewWithoutButton/>
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