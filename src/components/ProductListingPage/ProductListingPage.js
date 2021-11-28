import React from 'react';
import styled from 'styled-components';
import { Footer } from '../common';
import Header from '../common/header';
import Card from './Card';
function ProductListingPage() {
  return (
    <>
      <Header />
      <ProductListingPageContainer>
        {new Array(10).fill(0).map((item) => (
          <Card
            title={''}
            description={''}
            productPics={''}
            originalPrice={''}
          />
        ))}
      </ProductListingPageContainer>
      <Footer />
    </>
  );
}

export default ProductListingPage;

export const ProductListingPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  background: ${(props) => props.theme.colors.secondary};
`;
