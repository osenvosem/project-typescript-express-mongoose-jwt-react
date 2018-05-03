import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import { TTheme } from "./types";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  withTheme
} = styledComponents as ThemedStyledComponentsModule<TTheme>;

export { css, injectGlobal, keyframes, ThemeProvider, withTheme };
export default styled;
