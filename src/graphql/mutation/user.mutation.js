import gql from 'graphql-tag';

export const createUser = gql`
  mutation createUser($payload: User!) {
    createUser(payload: $payload)
  }
`;
