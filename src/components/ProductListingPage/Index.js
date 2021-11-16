import React from 'react';
import { Footer } from '../common';
import Body from './Body';
import SideBar from './SideBar';
import { Container, ProductListing } from './styledComponents';

function ProductListingPage() {
  return (
    <>
      <ProductListing>
        <SideBar />
        <Container>
          <Body />
        </Container>
      </ProductListing>
      <Footer />
    </>
  );
}

export default ProductListingPage;
