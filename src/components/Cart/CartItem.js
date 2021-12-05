import React from 'react';
import NumberFormat from 'react-number-format';
import { Item, ItemActions, ItemImage, ItemInfo } from './styledComponents';

const CartItem = ({ index, item, changeItemQuantity, deleteItem }) => {
  const { title, price, quantity, image, description } = item;

  return (
    <Item>
      <ItemImage>
        <img className="img" src={image} alt="" />
      </ItemImage>

      <ItemInfo>
        <div className="infoTitle">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <ItemActions>
          <div className="itemQuantity">
            <select
              className="Select"
              value={quantity}
              onChange={(event) => changeItemQuantity(event, index)}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
                <option key={item} value={item}>
                  Qty: {item}
                </option>
              ))}
            </select>
          </div>
          <div className="itemActionsDivider">|</div>
          <i
            className="fa-solid fa-trash itemDelete"
            onClick={deleteItem.bind(this, index)}></i>
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
