import gql from 'graphql-tag';

export const addProduct = gql`
  mutation addProduct($payload: ProductInput!) {
    addProduct(payload: $payload)
  }
`;
