import {DefaultTheme} from 'styled-components'

export const defaultTheme: DefaultTheme = {
  backgroundColor: {
    primary: 'rgba(27, 154, 233, 1)',
    secondary: '#ffffff',
    tertiary: '#111111',
  },
  textColor: {
    primary: '#ffffff',
    secondary: '#000000',
    tertiary: '#525252',
  },
  font: {
    weight: {
      heavyBold: 600,
      bold: 500,
      lightBold: 400,
      normal: 300,
      light: 200,
    },
    size: {
      header: {
        pc: '52px',
        tablet: '38px',
        mobileL: '34px',
        mobileM: '32px',
        mobileS: '30px',
      },
      subheader: {
        pc: '38px',
        tablet: '34px',
        mobileL: '30px',
        mobileM: '28px',
        mobileS: '26px',
      },
      lightSubheader: {
        pc: '30px',
        tablet: '28px',
        mobileL: '26px',
        mobileM: '24px',
        mobileS: '22px',
      },
      subsubheader: {
        pc: '24px',
        tablet: '22px',
        mobileL: '18px',
        mobileM: '16px',
        mobileS: '14px',
      },
      heavyMainText: {
        pc: '22px',
        tablet: '20px',
        mobileL: '19px',
        mobileM: '18px',
        mobileS: '17px',
      },
      mainText: {
        pc: '20px',
        tablet: '19px',
        mobileL: '18px',
        mobileM: '17px',
        mobileS: '16px',
      },
      heavyFootnote: {
        pc: '16px',
        tablet: '15px',
        mobileL: '14px',
        mobileM: '13px',
        mobileS: '13px',
      },
      footnote: {
        pc: '16px',
        tablet: '14px',
        mobileL: '14px',
        mobileM: '13px',
        mobileS: '12px',
      },
      lightFootnote: {
        pc: '14px',
        tablet: '14px',
        mobileL: '14px',
        mobileM: '13px',
        mobileS: '12px',
      },
    }
  },
}