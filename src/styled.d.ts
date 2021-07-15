import 'styled-components';

interface CTFont {
  fontWeight: number,
  fontSize: number
}

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string
    textColor: string
  }
}