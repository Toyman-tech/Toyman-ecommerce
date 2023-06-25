import {createGlobalStyle} from 'styled-components';


export const GlobalStyle =  createGlobalStyle`

body{
    font-family: Open Sans Condensed;

    @media screen and (max-width: 800px){
      padding: 10px;
    }
}
a{
    text-decoration: none;
    color: black;
}
*{
    box-sizing: border-box;
}
.bg{
    background: rgb(178,176,215);
background: linear-gradient(90deg, rgba(178,176,215,1) 0%, rgba(211,211,222,1) 51%, rgba(215,231,235,1) 100%);
}
`