import {
  ApolloClient,
  ApolloProvider,
  concat,
  HttpLink,
  InMemoryCache
} from '@apollo/client';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import theme from './config/appTheme';
import './config/firebase/firebaseconfig';
import { authMiddleware } from './config/graphql';
import { persist, store } from './config/redux/store';
import ErrorContextProvider from './contextProviders/ErrorContextProvider';
import './index.css';
import TheBookTownApplication from './router';

const App = () => {
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink)
  });
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <Router>
          <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
              <ErrorContextProvider>
                <TheBookTownApplication />
              </ErrorContextProvider>
            </ApolloProvider>
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
