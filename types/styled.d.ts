import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: "light" | "dark";
    colors: {
      text: string;
      background: string;
      primary: string;
      secondary: string;
      gray: string;
      shadow: string;
      palette: {
        blueColor: string;
        dimmedBlueColor: string;
        whiteColor: string;
        lightGrayColor: string;
        grayColor: string;
        darkGrayColor: string;
        trasparentBlackColor: string;
      };
    };
    sizeGrid: {
      half: number;
      base: number;
      double: number;
      triple: number;
      quadruple: number;
      tenfold: number;
      hundredfold: number;
    };
  }
}
