import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::after, *::before {
  box-sizing: border-box;
}

html, body {
  background-color: #fff;
  font-family: "Roboto";
  margin: 0;
  min-height: 100vh;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ol, ul, li {
  list-style: none;
}

h1, h2, h3, h4, h5, h6 {
  font-size: 1rem;
  font-weight: 100;
  margin: 0;
  padding: 0;
}

button {
  border: none;
  cursor: pointer;
}

input {
  border: none;
  font-family: inherit;
  font-size: inherit;
}

input::placeholder {
  color: inherit;
}
`;

export default GlobalStyles;
