import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
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
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={Store}>
        <Router>
          <ThemeProvider theme={theme}>
            <ErrorContextProvider>
              <TheBookTownApplication />
            </ErrorContextProvider>
          </ThemeProvider>
        </Router>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
