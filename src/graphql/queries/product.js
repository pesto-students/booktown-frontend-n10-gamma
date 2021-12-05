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
