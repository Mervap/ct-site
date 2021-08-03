import styled, {DefaultTheme, ThemeProps} from "styled-components";
import {AdaptiveFont} from "../../styled";

export interface AdaptiveTextProps {
  type?: "header" | "subheader" | "light_subheader" | "subsubheader" | "heavy_main_text" | "main_text" | "heavy_footnote" | "footnote" | "light_footnote",
  weight?: "heavy_bold" | "bold" | "light_bold" | "normal" | "light",
  textColor: "primary" | "secondary" | "tertiary"
  capitalize?: boolean,
  lineHeight?: number
}

function matchTextFontSize(p: AdaptiveTextProps & ThemeProps<DefaultTheme>,
                           extractor: (font: AdaptiveFont) => string): string {
  let font: AdaptiveFont
  switch (p.type) {
    case "header":
      font = p.theme.font.size.header;
      break
    case "subheader":
      font = p.theme.font.size.subheader;
      break
    case "light_subheader":
      font = p.theme.font.size.lightSubheader;
      break
    case "subsubheader":
      font = p.theme.font.size.subsubheader;
      break
    case "heavy_main_text":
      font = p.theme.font.size.heavyMainText;
      break
    case "main_text":
      font = p.theme.font.size.mainText;
      break
    case "heavy_footnote":
      font = p.theme.font.size.heavyFootnote;
      break
    case "footnote":
      font = p.theme.font.size.footnote;
      break
    case "light_footnote":
      font = p.theme.font.size.lightFootnote;
      break
    default:
      return "inherit"
  }
  return extractor(font)
}

export const AdaptiveText = styled.div<AdaptiveTextProps>`
  color: ${p => {
    switch (p.textColor) {
      case "primary":
        return p.theme.textColor.primary
      case "secondary":
        return p.theme.textColor.secondary
      case "tertiary":
        return p.theme.textColor.tertiary
    }
  }};
  text-transform: ${p => p.capitalize ? "uppercase" : "none"};
  letter-spacing: ${p => p.capitalize ? "1px" : "normal"};
  line-height: ${p => p.lineHeight !== undefined ? p.lineHeight : 1.55};
  font-weight: ${p => {
    switch (p.weight) {
      case "heavy_bold":
        return p.theme.font.weight.heavyBold
      case "bold":
        return p.theme.font.weight.bold
      case "light_bold":
        return p.theme.font.weight.lightBold
      case "normal":
        return p.theme.font.weight.normal
      case "light":
        return p.theme.font.weight.light
      default:
        return "inherit"
    }
  }};
  font-size: ${p => matchTextFontSize(p, f => f.pc)};
  @media (max-width: 1200px) {
    font-size: ${p => matchTextFontSize(p, f => f.tablet)};
  }
  @media (max-width: 900px) {
    font-size: ${p => matchTextFontSize(p, f => f.mobileL)};
  }
  @media (max-width: 750px) {
    font-size: ${p => matchTextFontSize(p, f => f.mobileM)};
  }
  @media (max-width: 500px) {
    font-size: ${p => matchTextFontSize(p, f => f.mobileS)};
  }
`;
