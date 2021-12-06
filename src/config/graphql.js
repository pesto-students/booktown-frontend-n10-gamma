import { ApolloClient, InMemoryCache } from '@apollo/client';
/**
 *
 * @param {{token:string}}} param0
 * @returns
 */
export const getClient = () => {
  const token = window.localStorage.getItem('user-token');
  const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  return client;
};
