import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
    overflow-y: hidden;
    overflow-x: hidden;
    margin-right: 20px;
}

button {
    background-color: transparent;
    outline: none;
    border: 0px;
    cursor: pointer;
}
`;
