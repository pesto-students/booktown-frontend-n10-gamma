import React from 'react';
import { About, AboutContainer } from './styledComponent';
import { Footer, Header } from '../common';
import FeatherIcon from 'feather-icons-react';
const index = (props) => {
  return (
    <>
      <Header isSearchBarHide />
      <AboutContainer>
        <About>
          <div>
            {' '}
            <FeatherIcon
              className="brand-name-icon"
              icon="book-open"
              size="60"
            />
          </div>
          <div className={'about-title'}>The BookTown</div>
          <div className={'about-subtitle'}>
            {' '}
            Read more, Gain more, Win more
          </div>
          <p className={'about-text'}>
            Booktown is a platform that connects readers with authors and
            publishers. We can buy and sell the book at the same place. It
            allows buyer to buy new or old books or you can have book one rent
            It allows readers to read books from their favorite authors and
            publishers. It allows authors to sell their books to readers.
          </p>
          <div className={'about-footer'}></div>
        </About>
      </AboutContainer>
      <Footer />
    </>
  );
};

index.propTypes = {};

export default index;
