import React from 'react';

import NumberFormat from 'react-number-format';
import { Item, ItemActions, ItemImage, ItemInfo } from './styledComponents';

const CartItem = ({ index, item, changeItemQuantity, deleteItem }) => {
  const { title, stock, price, quantity, image } = item;

  return (
    <Item>
      <ItemImage>
        <img className="img" src={image} alt="" />
      </ItemImage>

      <ItemInfo>
        <div className="infoTitle">
          <h2>{title}</h2>
        </div>
        <div className="infoStock">{stock}</div>

        <ItemActions>
          <div className="itemQuantity">
            <select
              value={quantity}
              onChange={(event) => changeItemQuantity(event, index)}>
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
              <option value="4">Qty: 4</option>
              <option value="5">Qty: 5</option>
              <option value="6">Qty: 6</option>
              <option value="7">Qty: 7</option>
              <option value="8">Qty: 8</option>
              <option value="9">Qty: 9</option>
            </select>
          </div>
          <div className="itemActionsDivider">|</div>
          <div className="itemDelete" onClick={deleteItem.bind(this, index)}>
            Delete
          </div>
        </ItemActions>
      </ItemInfo>
      <div className="Price">
        <NumberFormat
          value={price}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          decimalScale={2}
        />
      </div>
    </Item>
  );
};

export default CartItem;
