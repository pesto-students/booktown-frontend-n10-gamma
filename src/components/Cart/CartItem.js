import React from 'react';
import NumberFormat from 'react-number-format';
import { Input } from '../common';
import { Item, ItemActions, ItemImage, ItemInfo } from './styledComponents';

const CartItem = ({
  index,
  item,
  itemId,
  onItemQtyChange = () => {},
  onDeleteCartItem = () => {},
  onCartItemClick = () => {}
}) => {
  const { title, price, quantity, files, description } = item || {};

  return (
    <Item>
      <ItemImage onClick={(e) => onCartItemClick(itemId, e)}>
        <img className="img" src={files[0]} alt="img" />
      </ItemImage>

      <ItemInfo>
        <div className="infoTitle">
          <h5 className="title">{title}</h5>
          <p>{description}</p>
        </div>
      </ItemInfo>
      <div className="Price">
        <NumberFormat
          value={price}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          decimalScale={2}
        />
        <ItemActions>
          <div className="itemQuantity">
            <Input
              value={quantity}
              onChange={(e) => onItemQtyChange(itemId, e.target.value)}
              type="number"
              min={1}
              max={100}
            />
          </div>
          <div className="itemActionsDivider">|</div>
          <i
            className="fa-solid fa-trash itemDelete"
            onClick={(e) => onDeleteCartItem(itemId, e)}></i>
        </ItemActions>
      </div>
    </Item>
  );
};

export default CartItem;

/*
 */
