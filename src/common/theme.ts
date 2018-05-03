import { modularScale } from "polished";
import { TTheme } from "./types";

const theme: TTheme = {
  colors: {
    primary: "#58CDF7",
    secondary: "#FD739F",
    tertiary: "#84F4E1",
    quaternary: "#D3C4D1"
  },
  scale: {
    sixth: modularScale(6, 1, "goldenSection"),
    fifth: modularScale(5, 1, "goldenSection"),
    fourth: modularScale(4, 1, "goldenSection"),
    third: modularScale(3, 1, "goldenSection"),
    second: modularScale(2, 1, "goldenSection"),
    first: modularScale(1, 1, "goldenSection"),
    base: modularScale(0, 1, "goldenSection"),
    mFirst: modularScale(-1, 1, "goldenSection"),
    mSecond: modularScale(-2, 1, "goldenSection")
  }
};

export default theme;
