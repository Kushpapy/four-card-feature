import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    & {
--Red: hsl(0, 78%, 62%);
--Cyan: hsl(180, 62%, 55%);
--Orange: hsl(34, 97%, 64%);
--Blue: hsl(212, 86%, 64%);
--Very-Dark-Blue: hsl(234, 12%, 34%);
--Grayish-Blue: hsl(229, 6%, 66%);
--Very-Light-Gray: hsl(0, 0%, 98%);
    }
}

*,::after,::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* html{
    font-size: 62.5%;
} */

#root{
  min-height: inherit;
  padding: 2rem 0;
}

body{
    min-height: 100vh;
    font-family: "Poppins", sans-serif;
    background-color: var(--Very-Light-Gray);
   
}
`;

export default GlobalStyle;
