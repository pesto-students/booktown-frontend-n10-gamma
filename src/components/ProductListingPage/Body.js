import React from 'react';
import book_card from '../../DummyData/bookData';

import {
  Button,
  Card,
  CardHeader,
  Content,
  H2,
  Image
} from './styledComponents';

const Body = () => {
  const listItems = book_card.map((item) => (
    <Card key={item.id}>
      <div className="card_img">
        <Image alt="img" src={item.img} />
      </div>
      <CardHeader>
        <h1 color>{item.name}</h1>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <Button>Add to cart</Button>
      </CardHeader>
    </Card>
  ));

  return <Content>{listItems}</Content>;
};

export default Body;
