import { gql } from '@apollo/client';

const GET_BOOKS_DATA = gql`
  query getBooks {
    books {
      id
      title
      subTitle
      author
      published
      publisher
      pages
      description
      files
      condition
      language
      price
      originalPrice
      status
      format
      subcategory
      category
    }
  }
`;
export { GET_BOOKS_DATA };
