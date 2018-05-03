import { injectGlobal } from "styledComponents";

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    font-family: "Inter UI", sans-serif;
  }
  
  #root {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
`;
