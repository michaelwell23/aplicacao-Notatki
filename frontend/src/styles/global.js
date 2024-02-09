import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Mono', sans-serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
    background: transparent;
    cursor: pointer;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s ease 0s;
    background-color: transparent;
    border: none;
  }

  button:hover, a:hover {
    filter: brightness(0.85);
  }
`;
