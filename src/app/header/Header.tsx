import {Component} from "react";
import {Link} from "../components/Link";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  display: table;
  vertical-align: middle;
  background-color: ${p => p.theme.backgroundColor.primary};
  color: ${p => p.theme.textColor.primary};

  @media (max-width: 800px) {
    display: block;
    text-align: center;
  }
`

const SiteName = styled.div`
  font-size: ${p => p.theme.font.size.subsubheader.pc};
  font-weight: ${p => p.theme.font.weight.lightBold};
  padding: 20px 0 0 10%;

  @media (max-width: 800px) {
    padding: 40px;
  }
`

const Sections = styled.div`
  font-size: ${p => p.theme.font.size.footnote.pc};
  font-weight: ${p => p.theme.font.weight.heavyBold};
  display: table-cell;
  text-align: right;

  @media (max-width: 800px) {
    display: block;
    text-align: center;
  }

  ul {
    display: inline-flex;
    list-style-type: none;
    padding: 20px 2.5%;
    margin: 0;

    @media (max-width: 800px) {
      display: block;
    }

    li {
      padding: 10px 15px;
      text-transform: uppercase;

      @media (min-width: 800px) {
        :last-child {
          padding-right: 0;
        }

        :first-child {
          padding-left: 0;
        }
      }
    }
  }
`

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <SiteName><Link to="/">КТ ИТМО</Link></SiteName>
        <Sections>
          <ul>
            <li><Link to="/school">Школьникам</Link></li>
            <li><Link to="/abit">Абитуриентам</Link></li>
            <li><Link to="/students">Студентам</Link></li>
          </ul>
        </Sections>
      </HeaderContainer>
    );
  }
}

export default Header;