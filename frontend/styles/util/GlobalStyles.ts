import { createGlobalStyle } from "styled-components";
import devices from "~styles/util/MediaSizes";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #2d2d2d;
    --secondary: #535353;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0 10%;
    background: #f1f1f1;
    
    @media ${devices.mobileL} {
      margin: 0 5%;
    }
  }

  h2 {
    font-size: 1.2rem;
    color: var(--primary);
  }

  h3 {
    font-size: 1rem;
    color: var(--secondary);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    line-height: 100%;
  }
`;

export default GlobalStyles;
