import { gql } from '@apollo/client';

const GET_BOOKS = gql`
  query Getbooks {
    books {
      title
      subTitle
      id
      title
      subTitle
      author
      published
      publisher
      pages
      description
      url
      type
      language
      price
    }
  }
`;

export { GET_BOOKS };
