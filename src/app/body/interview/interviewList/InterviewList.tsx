import InterviewListHeader from "./InterviewListHeader";
import AbstractInterviewPreviewComponent, {
  InterviewInfo,
  previewBlockMaxWidth
} from "../../../util/components/AbstractInterviewPreviewComponent";
import React from "react";
import styled from "styled-components";
import {AdaptiveText, AdaptiveTextProps} from "../../../util/components/AdaptiveText";
import {Link} from "../../../util/components/Link";
import interviewList from "../../../../interviewList.json";

const previewListMaxWidth = 650

const Container = styled.div`
  @media (max-width: ${previewBlockMaxWidth}px) {
    padding-bottom: 50px;
    @media (min-width: ${previewListMaxWidth}px) {
      display: grid;
      grid-template-columns: 45% 45%;
      grid-column-gap: 5%;
    }
  }
`

const TextContainer = styled.div`
  @media (max-width: ${previewBlockMaxWidth}px) {
    margin: auto 0
  }
`

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-position: center;
  object-fit: cover;

  @media (min-width: ${previewListMaxWidth}px) and (max-width: ${previewBlockMaxWidth}px) {
    height: 400px;
    margin: auto 0;
  }
`

const Header = styled(AdaptiveText)<AdaptiveTextProps>`
  padding-top: 5px;
`

const Description = styled(AdaptiveText)<AdaptiveTextProps>`
  padding-top: 5px;
`

interface InterviewListProps {
  isLargeCanvas: boolean
}

class InterviewList extends AbstractInterviewPreviewComponent<{}, InterviewListProps> {

  interviewNames = interviewList.all;

  initState(): InterviewListProps {
    return {isLargeCanvas: false};
  }

  protected onResize(width: number, height: number) {
    this.setState({
      interviews: this.state.interviews,
      isLargeCanvas: width <= previewBlockMaxWidth
    })
  }

  renderHeader(): React.ReactNode {
    return <InterviewListHeader/>;
  }

  renderPreview(info: InterviewInfo, key: number): React.ReactNode {
    const isLargeCanvas = this.state.isLargeCanvas
    return (
      <Link key={key} to={'/interviews/' + info.name}>
        <Container>
          <Image src={"/img/interviews/" + info.name + "/preview.png"}
                 alt={info.name.replace("_", " ")}/>
          <TextContainer>
            <Header textColor='secondary' type={isLargeCanvas ? 'subheader' : 'main_text'} weight='heavy_bold'>
              {info.header}
            </Header>
            <Description textColor='secondary' type={isLargeCanvas ? 'main_text' : 'heavy_footnote'} weight='normal' lineHeight={1.55}>
              {info.description}
            </Description>
          </TextContainer>
        </Container>
      </Link>
    );
  }
}

export default InterviewList;