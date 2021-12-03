import { ApolloLink } from '@apollo/client';

export const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = 'my token';
  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });
  // Call the next link in the middleware chain.
  return forward(operation);
});
