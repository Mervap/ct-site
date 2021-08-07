import {Component} from "react";
import styled from "styled-components";
import {AdaptiveText} from "../../util/components/AdaptiveText";

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-height: 100vw) {
    min-height: 100vh;
  }

  @media (max-width: 900px) {
    height: fit-content;
  }
`

const InnerContainer = styled.div`
  width: 95%;
  max-width: 1100px;
  text-align: center;
  margin: 60px 0;
  background-color: ${p => p.theme.backgroundColor.secondary};

  .inner_block {
    padding: 80px;

    @media (max-width: 1200px) {
      padding: 50px;
    }

    @media (max-width: 500px) {
      padding: 50px 15px;
    }
  }
`

const Delimiter = styled.div`
  height: 3px;
  max-width: 50px;
  margin: 0 auto;
  background-color: #666;
`

class Description extends Component {
  render() {
    return (
      <OuterContainer>
        <InnerContainer>
          <div className="inner_block">
            <AdaptiveText type="subheader" weight="heavy_bold" textColor="secondary" style={{marginBottom: "29px"}}>
              Что такое КТ ИТМО?
            </AdaptiveText>
            <Delimiter/>
            <AdaptiveText type="main_text" weight="normal" textColor="secondary"
                          style={{marginTop: "31px", lineHeight: "30px"}}>
              Наша образовательная программа существует с 1991 года и исторически известна как кафедра КТ. Эта программа
              постоянно совершенствуется, и сегодня кафедра сильно отличается от того, какой она была создана когда-то,
              но уютная атмосфера, царящая здесь, и потрясающие люди остаются неизменными.
              Наши студенты — талантливые разносторонние ребята, которые успешно занимаются учёбой, наукой,
              преподаванием и стажируются в самых разнообразных отраслях. У выпускников широкие перспективы: они
              работают в ведущих IT-компаниях в России и за границей, создают успешные стартапы, а также занимаются
              наукой в различных областях Computer Science.
              <br/>
              Кафедра КТ — это не просто структурная единица очередной бюрократической машины.
              <br/>
              Это люди и сообщество, которое они создают.
            </AdaptiveText>
          </div>
        </InnerContainer>
      </OuterContainer>
    );
  }
}

export default Description;