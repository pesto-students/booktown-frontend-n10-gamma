import { useQuery } from '@apollo/react-hooks';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addItem } from '../../config/redux/features/cart/cartSlice';
import { GET_BOOKS_DATA } from '../../graphql/queries/product-listing';
import { useSession } from '../../hooks';
import { Footer, Skeleton } from '../common';
import Header from '../common/header';
import Card from './Card';
import SideBar from './SideBar';
import { MainContainer, ProductListingPageContainer } from './styledComponents';

function ProductListingPage() {
  const [books, setBooks] = useState([]);
  const [searchInputText, setSearchInputText] = useState('');
  const [booksFilter, setBooksFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const session = useSession();
  const dispatch = useDispatch();
  const history = useHistory();
  const booksData = useQuery(GET_BOOKS_DATA);

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

  useEffect(() => {
    const { error, loading, data } = booksData;
    if (error) console.log(error.message);
    if (!loading && data) {
      setBooks(data.books);
    }
  }, [booksData]);

  useEffect(() => {
    const filteredBooks = books.filter((d) =>
      (d.title.toLowerCase() || d.author.toLowerCase()).includes(
        searchInputText.toLocaleLowerCase()
      )
    );
    setBooksFilter(filteredBooks);
  }, [books, searchInputText]);

  const onChangeSearch = (e) => {
    setSearchInputText(e.target.value);
  };

  const booksPerPage = 12;
  const pagesVisited = pageNumber * booksPerPage;

  const displayBooks = booksFilter.slice(
    pagesVisited,
    pagesVisited + booksPerPage
  );

  const pageCount = Math.ceil(booksFilter.length / booksPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const onCardClick = (item) => {
    history.push(`/product-details/${item.id}`);
  };

  return (
    <>
      <Header onChangeSearch={onChangeSearch} />
      <MainContainer>
        <SideBar />
        <ProductListingPageContainer>
          {displayBooks?.length > 0
            ? displayBooks.map((item) => {
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

          <ReactPaginate
            previousLabel={'<<'}
            nextLabel={'>>'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBttns'}
            previousLinkClassName={'previousBttn'}
            nextLinkClassName={'nextBttn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </ProductListingPageContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

export default ProductListingPage;
