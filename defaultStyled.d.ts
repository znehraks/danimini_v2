import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    headerColor: {
      light: string;
      dark: string;
    };
    footerColor: {
      light: string;
      dark: string;
    };
    backgroundColor: {
      light: string;
      dark: string;
    };
    fontColor: {
      light: string;
      dark: string;
    };
  }
}
