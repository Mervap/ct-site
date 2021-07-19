import 'styled-components';

interface AdaptiveFont {
  pc: string
  tablet: string
  mobileL: string
  mobileM: string
  mobileS: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: {
      primary: string
      secondary: string
      tertiary: string
    }
    textColor: {
      primary: string
      secondary: string
      tertiary: string
    }
    font: {
      size: {
        header: AdaptiveFont
        subheader: AdaptiveFont
        subsubheader: AdaptiveFont
        heavyMainText: AdaptiveFont
        mainText: AdaptiveFont
        heavyFootnote: AdaptiveFont
        footnote: AdaptiveFont
        lightFootnote: AdaptiveFont
      }
      weight: {
        heavyBold: number,
        bold: number
        lightBold: number,
        normal: number
        light: number
      }
    }
  }
}