import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Footer } from '../common';
import Header from '../common/header';
import Card from './Card';

import { useQuery } from '@apollo/client';

import { Item, ItemTotal } from '../Cart/styledComponents';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../config/redux/features/cart/cartSlice';
import { GET_BOOKS_DATA } from '../../Graphql/queries/product-listing';

function ProductListingPage() {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();

  const booksData = useQuery(GET_BOOKS_DATA);

  const onAddToCart = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    const { error, loading, data } = booksData;
    if (error) console.log(error.message);
    if (!loading && data) {
      console.log(data.books);
      setBooks(data.books);
    }
  }, [booksData]);
  return (
    <>
      <Header />
      <ProductListingPageContainer>
        {books.map((item) => {
          return (
            <Card
              item={item}
              onAddToCart={onAddToCart}
              title={item.title}
              description={item.description}
              productPics={[item.url]}
              originalPrice={item.price}
            />
          );
        })}
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
