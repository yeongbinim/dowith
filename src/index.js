import React from 'react';
import App from 'Components/App';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);