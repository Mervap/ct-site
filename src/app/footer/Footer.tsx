import {Component} from "react";
import {SocialIcon as ReactSocialIcon, SocialIconProps} from 'react-social-icons';
import styled from "styled-components";
import {Link} from "../components/Link";
import {AdaptiveText} from "../components/AdaptiveText";

const FooterSectionContainer = styled.div`
  padding: 0 20px;

  @media (max-width: 512px) {
    padding-top: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;
    margin-top: 15px;

    li {
      margin-bottom: 13px;

      :last-child {
        margin-bottom: 0;
      }
    }
  }
`

interface FooterSectionProps {
  header: string
}

class FooterSection extends Component<FooterSectionProps> {
  render() {
    return (
      <FooterSectionContainer>
        <AdaptiveText type="footnote" weight="heavy_bold" textColor="tertiary" capitalize>
          {this.props.header}
        </AdaptiveText>
        <AdaptiveText type="light_footnote" weight="normal" textColor="primary">
          <ul>
            {this.props.children}
          </ul>
        </AdaptiveText>
      </FooterSectionContainer>
    );
  }
}

const FooterOuterContainer = styled.div`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor.tertiary};
`

const FooterInnerContainer = styled.div`
  padding: 75px 15% 75px 10%;
  width: 75%;
  display: inline-flex;
  justify-content: space-evenly;

  @media (max-width: 1200px) {
    display: grid;
    row-gap: 30px;
    grid-template-rows: 50% 50%;
    grid-template-columns: 200px 250px;
  }

  @media (max-width: 512px) {
    display: block;
  }
`

const SocialIconsSection = styled.div`
  padding-left: 20px;
  padding-right: 50px;

  @media (max-width: 1200px) {
    padding-right: 0;
  }
`

class SocialIcon extends Component<SocialIconProps> {
  render() {
    return (
      <ReactSocialIcon style={
        {
          width: "25px",
          height: "25px",
          marginRight: "7px"
        }
      } bgColor="#525252" {...this.props}/>
    );
  }
}

const SiteName = styled.div`
  font-size: ${p => p.theme.font.size.mainText.pc};
  font-weight: ${p => p.theme.font.weight.heavyBold};
  color: ${p => p.theme.textColor.primary};
`

const Copyright = styled.div`
  margin-top: 30px;
  font-size: ${p => p.theme.font.size.lightFootnote.mobileS};
  color: ${p => p.theme.textColor.tertiary};
`

class Footer extends Component {
  render() {
    return (
      <FooterOuterContainer>
        <FooterInnerContainer>
          <SocialIconsSection>
            <SiteName><Link to="/">КТ ИТМО</Link></SiteName>
            <div style={{marginTop: "30px"}}>
              <SocialIcon url="https://vk.com/ct_itmo"/>
              <SocialIcon url="https://www.youtube.com/c/CTLectures"/>
              <SocialIcon url="https://t.me/abit_ct" network="telegram"/>
            </div>
            <Copyright>&copy; 2021 CT ITMO</Copyright>
          </SocialIconsSection>
          <FooterSection header="Абитуриентам">
            <li><Link to="/abit">Поступление на КТ</Link></li>
            <li><Link to="https://abit.itmo.ru">Приёмная кампания ИТМО</Link></li>
            <li><Link to="/faq">FAQ 2021</Link></li>
            <li><Link to="https://ctd.page.link/slides">Презентация</Link></li>
          </FooterSection>
          <FooterSection header="О кафедре">
            <li><Link to="/interviews">Интервью</Link></li>
            <li><Link to="https://ctlab.ifmo.ru/ru/">Научная лаборатория</Link></li>
          </FooterSection>
          <FooterSection header="Образование">
            <li><Link to="https://codeforces.com/edu/courses">ITMO Academy</Link></li>
            <li><Link to="https://neerc.ifmo.ru/information/index.html">NE Finals (NERC)</Link></li>
            <li><Link to="https://neerc.ifmo.ru/school/information/index.html">Олимпиады для школьников</Link></li>
          </FooterSection>
        </FooterInnerContainer>
      </FooterOuterContainer>
    );
  }
}

export default Footer;