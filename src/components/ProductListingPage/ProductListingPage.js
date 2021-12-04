import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { addItem } from '../../config/redux/features/cart/cartSlice';
import { GET_BOOKS_DATA } from '../../graphql/queries/product-listing';
import { Header, Footer, Skeleton } from '../common';
import Card from './Card';
import { PRODUCT_DETAILS } from '../../router/types';

function ProductListingPage() {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const booksData = useQuery(GET_BOOKS_DATA);

  const onAddToCart = (item) => {
    dispatch(addItem(item));
  };
  const onCardClick = (item) => {
    history.push(`${PRODUCT_DETAILS}/${item.id}`);
  };

  useEffect(() => {
    const { error, loading, data } = booksData;
    if (error) console.log(error.message);
    if (!loading && data) {
      setBooks(data.books);
    }
  }, [booksData]);
  return (
    <>
      <Header />
      <ProductListingPageContainer>
        {books?.length > 0
          ? books.map((item) => {
              return (
                <Card
                  key={item.id}
                  onClick={onCardClick}
                  item={item}
                  onAddToCart={onAddToCart}
                  title={item.title}
                  description={item.description}
                  productPics={item.files || []}
                  originalPrice={item.originalPrice}
                  category={item.category}
                  subCategory={item.subcategory}
                  price={item.price}
                />
              );
            })
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => <Skeleton />)}
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
