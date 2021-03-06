export const addItemToCart = (cartItems, payload) => {
  const { uid, item } = payload || {};
  const newCartItemState = {
    ...cartItems,
    [uid]: {
      ...cartItems[uid],
      [item.id]: {
        ...item,
        quantity: 1
      }
    }
  };
  return newCartItemState;
};

export const removeItemFromCart = (cartItems, payload) => {
  const { uid, itemId } = payload || {};
  const userSpecificItem = cartItems[uid] || {};
  const userSpecificClone = { ...userSpecificItem };
  delete userSpecificClone[itemId];
  const newCartState = {
    ...cartItems,
    [uid]: userSpecificClone
  };
  return newCartState;
};

export const removeUserCartItems = (cartItems, payload) => {
  const { uid } = payload || {};
  const newCartState = {
    ...cartItems,
    [uid]: {}
  };
  return newCartState;
};

export const updateCartItemQuantity = (cartItems, payload) => {
  const { itemId, qty, uid } = payload || {};
  const userSpecificItem = cartItems[uid];
  const data = { ...userSpecificItem[itemId] };
  data.quantity = qty;
  const newCartState = {
    ...cartItems,
    [uid]: { ...userSpecificItem, [itemId]: data }
  };
  return newCartState;
};
