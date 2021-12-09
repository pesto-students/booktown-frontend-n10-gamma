import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addItem } from '../../config/redux/features/cart/cartSlice';
import { GET_BOOKS_DATA } from '../../graphql/queries/product-listing';
import { useSession } from '../../hooks';
import { Footer, Loader, Skeleton } from '../common';
import Header from '../common/header';
import Card from './Card';
import SideBar from './SideBar';
import {
  MainContainer,
  ProductListingPageContainer,
  PaginationContainer
} from './styledComponents';
import ReactPaginate from 'react-paginate';
import { getBooksCount } from '../../graphql/queries/product';

const totalItemsPerPage = 8;
function ProductListingPage() {
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loader, setLoader] = useState(true);
  const session = useSession();
  const dispatch = useDispatch();
  const history = useHistory();
  const [booksQuery, res] = useLazyQuery(GET_BOOKS_DATA, {
    fetchPolicy: 'no-cache'
  });
  const getBooksCntQuery = useQuery(getBooksCount, { fetchPolicy: 'no-cache' });
  const onAddToCart = (item, e) => {
    const itemClone = { ...item };
    delete itemClone.__typename;
    e.stopPropagation();
    const uid = session?.user?.uid;
    const payload = {
      uid,
      item: itemClone
    };
    dispatch(addItem(payload));
  };
  const callBooksQuery = (page) => {
    booksQuery({
      variables: {
        page: page,
        limit: totalItemsPerPage
      }
    });
  };

  useEffect(() => {
    callBooksQuery(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (getBooksCntQuery.data?.getBooksCount && !getBooksCntQuery.loading) {
      setTotalPages(
        Math.ceil(getBooksCntQuery.data.getBooksCount / totalItemsPerPage)
      );
      setLoader(() => false);
    } else if (getBooksCntQuery.error && !getBooksCntQuery.loading) {
      toast.error('Something went wrong');
      setLoader(() => false);
    }
  }, [getBooksCntQuery]);
  useEffect(() => {
    if (res.data && !res.loading) {
      setBooks(() => res.data.books);
    } else if (res.error && !res.loading) {
      toast.error('Something went wrong');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [res.loading]);

  const handlePageClick = (data) => {
    setBooks(() => []);
    const selected = data.selected;
    callBooksQuery(selected + 1);
  };

  const onCardClick = (item) => {
    history.push(`/product-details/${item.id}`);
  };

  return (
    <>
      <Header />
      <MainContainer>
        <SideBar />
        <ProductListingPageContainer>
          {books?.length > 0
            ? books.map((item) => {
                return (
                  <Card
                    onClick={onCardClick}
                    key={item.id}
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
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => (
                <Skeleton key={item} />
              ))}
        </ProductListingPageContainer>
      </MainContainer>
      {loader ? (
        <div style={{ textAlign: 'center' }}>Loading...</div>
      ) : (
        <PaginationContainer>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={totalPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={'paginate-container'}
            pageClassName={'page-item'}
            activeClassName={'page-active'}
            previousClassName={'page-item-prev'}
            nextClassName={'page-item-next'}
          />
        </PaginationContainer>
      )}
      <Footer />
    </>
  );
}

export default ProductListingPage;
