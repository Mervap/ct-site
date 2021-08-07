import {Component} from "react";
import styled from "styled-components";
import {AdaptiveText, AdaptiveTextProps} from "../../../util/components/AdaptiveText";

const OuterContainer = styled.div`
  width: 100%;
  padding: 40% 0;
  
  @media (max-height: 100vw) {
    min-height: 100vh;
    padding: 0;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.7);
`

const InnerContainer = styled.div`
  text-align: center;
  width: 90%;
  max-width: 700px;
`

const University = styled(AdaptiveText)<AdaptiveTextProps>`
  letter-spacing: 2.5px;
`

const Header = styled(AdaptiveText)<AdaptiveTextProps>`
  padding-top: 65px;
`

const Description = styled(AdaptiveText)<AdaptiveTextProps>`
  padding-top: 40px;
`

class InterviewListHeader extends Component {
  render() {
    return (
      <OuterContainer>
        <InnerContainer>
          <University textColor="primary" type='light_footnote' weight='heavy_bold' capitalize>
            Кафедра КТ университет ИТМО
          </University>
          <Header textColor='primary' type='heavy_header' weight='heavy_bold' capitalize>
            Интервью
          </Header>
          <Description textColor='primary' type='subsubheader' weight='normal' lineHeight={1.5}>
            Никто не расскажет про нас лучше, чем наши студенты, выпускники и преподаватели. Читайте интервью, в которых
            они рассказывают свои истории, узнавайте новое и вдохновляйтесь!
          </Description>
        </InnerContainer>
      </OuterContainer>
    );
  }
}

export default InterviewListHeader;