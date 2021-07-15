import {Component} from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor};
  color: ${p => p.theme.textColor};
  vertical-align: middle;
  display: table;

  @media (max-width: 800px) {
    display: block;
    text-align: center;
  }
`

const TopicsContainer = styled.div`
  font-weight: 600;
  font-size: 16px;
  display: table-cell;
  text-align: right;
  
  @media (max-width: 800px) {
    display: block;
    text-align: center;
  }

  ul {
    display: inline-flex;
    list-style-type: none;
    padding: 20px 2.5% 20px 20px;
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

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`

const SiteName = styled.div`
  font-weight: 400;
  font-size: 24px;
  padding: 20px 0 0 10%;

  @media (max-width: 800px) {
    padding: 40px;
  }
`

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <SiteName><Link to="/">КТ ИТМО</Link></SiteName>
        <TopicsContainer>
          <ul>
            <li><Link to="school">Школьникам</Link></li>
            <li><Link to="abit">Абитуриентам</Link></li>
            <li><Link to="students">Студентам</Link></li>
          </ul>
        </TopicsContainer>
      </HeaderContainer>
    );
  }
}

export default Header;