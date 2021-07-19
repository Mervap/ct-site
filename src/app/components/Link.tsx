import {Link as ReactLink, LinkProps} from 'react-router-dom';
import {Component} from "react";
import styled from "styled-components";

class UnstyledLink extends Component<LinkProps> {
  render() {
    const to = this.props.to as string
    return /^https?:\/\//.test(to)
      ? <a href={to} {...this.props}>{this.props.children}</a>
      : <ReactLink {...this.props}>{this.props.children}</ReactLink>
  }
}

export const Link = styled(UnstyledLink)`
  color: inherit;
  text-decoration: none;
`;