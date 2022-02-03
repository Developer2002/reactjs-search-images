import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5429cc;
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --header: #323232;
    --background: #f0f2f5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 85.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.5);
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    max-height: 500px;

    padding: 2rem;

    border-radius: 0.125rem;
    
    position: relative;

    background: var(--background);
    overflow-x: auto;
    white-space: nowrap;
  }

  .react-modal-close {
    position: absolute;

    right: 1.5rem;
    top: 1.5rem;

    border: 0;

    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;