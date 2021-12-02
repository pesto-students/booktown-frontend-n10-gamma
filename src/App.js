import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import theme from './config/appTheme';
import './config/firebase/firebaseconfig';
import { store, persist } from './config/redux/store';
import ErrorContextProvider from './contextProviders/ErrorContextProvider';
import './index.css';
import TheBookTownApplication from './router';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
});

const App = () => {
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
