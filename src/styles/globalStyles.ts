import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        background: ${props => props.theme['--base-background']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1.6rem Nunito, sans-serif; 
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['--base-border']};
    }
`