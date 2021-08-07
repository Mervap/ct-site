import InterviewListHeader from "./InterviewListHeader";
import InterviewPreviewCollector, {
  InterviewInfo,
  previewBlockMaxWidth
} from "../../../components/InterviewPreviewCollector";
import React from "react";
import styled from "styled-components";
import {AdaptiveText, AdaptiveTextProps} from "../../../components/AdaptiveText";
import {Link} from "../../../components/Link";

const Container = styled.div`
  @media (max-width: ${previewBlockMaxWidth}px) {
    padding-bottom: 50px;
    @media (min-width: 600px) {
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
`

const Header = styled(AdaptiveText)<AdaptiveTextProps>`
  padding-top: 5px;
`

const Description = styled(AdaptiveText)<AdaptiveTextProps>`
  padding-top: 5px;
`

class InterviewList extends InterviewPreviewCollector {
  fetchAll = true;

  renderHeader(): React.ReactNode {
    return <InterviewListHeader/>;
  }

  renderPreview(info: InterviewInfo, key: number): React.ReactNode {
    return (
      <Link key={key} to={'/interviews/' + info.name}>
        <Container>
          <Image src={"/img/interviews/" + info.name + "/preview.png"}
                 alt={info.name.replace("_", " ")}/>
          <TextContainer>
            <Header textColor='secondary' type='main_text' weight='heavy_bold'>
              {info.header}
            </Header>
            <Description textColor='secondary' type='heavy_footnote' weight='normal' lineHeight={1.55}>
              {info.description}
            </Description>
          </TextContainer>
        </Container>
      </Link>
    );
  }
}

export default InterviewList;