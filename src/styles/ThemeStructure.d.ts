import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      terciary: string;
      quaternary: string;
    };
    fonts: {
      main: string;
      secondary: string;
    };
  }
}
