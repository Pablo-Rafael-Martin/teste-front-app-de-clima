import { createGlobalStyle } from "styled-components";

export const GlobalVars = createGlobalStyle`
    :root {
        --main-frame-padding: 48rem;
    }

    ::-webkit-scrollbar {
        width: 3px;
        height: 3px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        /* background-color: blue; */
        background-color: rgba(255, 255, 255, 0.48);
        border-radius: 10px;
        border: unset;
    }

    ::-webkit-scrollbar-thumb:hover {
        /* background: yellow; */
        /* background-color: inherit; */
        background-color: rgba(255, 255, 255, 0.7);
    }
`;