import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding:0;
}

body {
    height:100vh;
    width:100%;
    background:linear-gradient(to right,#1e90ff,#3742fa);
    /* background-color:#1e90ff; */
    color:white;
    font-weight: bold;
    overflow-x:hidden;
    /* text-align:center; */
}
`;

export default GlobalStyle;
