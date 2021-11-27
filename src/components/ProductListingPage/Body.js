import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import book_card from '../../DummyData/bookData';
import { GET_BOOKS } from '../../Graphql/Queries/ProductListing';

import {
  Button,
  Card,
  CardHeader,
  Content,
  H2,
  Image
} from './styledComponents';

const Body = () => {
  const [books, setBooks] = useState([]);

  const getBooks = useQuery(GET_BOOKS);

  useEffect(() => {
    const { loading, data, error } = getBooks;
    if (error) console.log(JSON.stringify(error, null, 2));
    else if (!loading && data) {
      console.log(data.books);
      setBooks(data.books);
    }
  }, [getBooks]);

  const listItems = books.map((book) => (
    <Card key={book.id}>
      <div className="card_img">
        <Image alt="img" src={book.url} />
      </div>
      <CardHeader>
        <h1 color>{book.title}</h1>
        <p>{book.subTitle}</p>
        <p className="price">
          <span>$</span>
          {book.price}
        </p>
        <Button>Add to cart</Button>
      </CardHeader>
    </Card>
  ));

  return <Content>{listItems}</Content>;
};

export default Body;
