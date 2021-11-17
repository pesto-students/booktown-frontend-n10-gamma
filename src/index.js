import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from './config/redux/store';
import TheBookTownApplication from './router';
import { ThemeProvider } from 'styled-components';
import theme from './config/appTheme';
import ErrorContextProvider from './contextProviders/ErrorContextProvider';

import './config/firebase/firebaseconfig';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <ThemeProvider theme={theme}>
          <ErrorContextProvider>
            <TheBookTownApplication />
          </ErrorContextProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
