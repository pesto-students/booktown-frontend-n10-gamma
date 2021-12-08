import gql from 'graphql-tag';

export const addOrderHistory = gql`
  mutation addOrderHistory($payload: OrderHistoryInput!) {
    addOrderHistory(payload: $payload)
  }
`;
