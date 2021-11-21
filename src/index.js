import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './config/appTheme';
import './config/firebase/firebaseconfig';
import Store from './config/redux/store';
import ErrorContextProvider from './contextProviders/ErrorContextProvider';
import './index.css';
import TheBookTownApplication from './router';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <ErrorContextProvider>
              <TheBookTownApplication />
            </ErrorContextProvider>
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
