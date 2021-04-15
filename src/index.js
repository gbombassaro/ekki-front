import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider, StyleSheetManager} from 'styled-components';

import App from './App';
import StateProvider from './provider';
import {theme} from './styles/theme';
import './index.css';

ReactDOM.render( 
  <StateProvider>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyleSheetManager disableVendorPrefixes={true}>
          <App />
        </StyleSheetManager>
      </ThemeProvider>
    </BrowserRouter>
  </StateProvider>
  ,
  document.getElementById('root')
);