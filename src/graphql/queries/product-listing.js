import { gql } from '@apollo/client';

export const GET_BOOKS_DATA = gql`
  query books($page: Int!, $limit: Int!) {
    books(page: $page, limit: $limit) {
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
