import gql from 'graphql-tag';

export const getProductById = gql`
  query getProductById($id: String) {
    getProductById(id: $id) {
      status
      message
      data {
        title
        subTitle
        publisher
        author
        price
        originalPrice
        files
        subcategory
        shippingAddress {
          address
          city
          state
          country
          zipCode
        }
        description
        category
        format
        condition
        status
      }
    }
  }
`;

export const getBooksCount = gql`
  query getBooksCount {
    getBooksCount
  }
`;

export const searchBooks = gql`
  query searchBooks($query: String) {
    searchBooks(query: $query) {
      id
      title
    }
  }
`;

export const filterBooks = gql`
  query filterBooks($payload: FilterOptions!) {
    filterBooks(payload: $payload) {
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
