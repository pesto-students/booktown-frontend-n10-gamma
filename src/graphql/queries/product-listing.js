import { gql } from '@apollo/client';

const GET_BOOKS_DATA = gql`
  query getBooks {
    books {
      id
      title
      description
      price
      url
    }
  }
`;
export { GET_BOOKS_DATA };
