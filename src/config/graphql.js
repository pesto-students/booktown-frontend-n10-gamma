import { ApolloLink } from '@apollo/client';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const authMiddleware = new ApolloLink(async (operation, forward) => {
  // add the authorization to the headers
  let intervalId = 0;
  const token = await new Promise((resolve, reject) => {
    intervalId = setInterval(() => {
      firebase
        .auth()
        ?.currentUser?.getIdToken(true)
        .then((token) => {
          resolve(token);
          clearInterval(intervalId);
        });
    }, 1000);
  });

  operation.setContext(({ headers = {} }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token || null}`
      }
    };
  });

  return forward(operation);
});
