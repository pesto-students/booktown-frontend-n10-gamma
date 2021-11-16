import styled from 'styled-components';

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 18px 0 18px;
  align-items: flex-start;
`;

const Item = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-direction: column;

  .Price {
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
    padding-top: 10px;
    padding-top: 10px;
  }
`;

const ItemInfo = styled.div`
  display: flex;

  .infoTitle {
    margin-left: 16px;
  }
  .infoStock {
    margin-top: 4px;
    color: #007600;
    margin-left: 16px;
  }
`;

const ItemActions = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  margin-left: 16px;

  .itemQuantity {
    .Select {
      background-color: #f2f2f2;
      padding: 9px;
      border-radius: 7px;
      box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
    }
  }

  .itemActionsDivider {
    margin-left: 8px;
    margin-right: 8px;
    color: #dddddd;
    font-weight: bold;
  }

  .itemDelete {
    color: #007185;
    cursor: pointer;
  }
`;

const ItemImage = styled.div`
  width: 180px;
  height: 180px;
  flex-grow: 0;
  flex-shrink: 0;
  padding-bottom: 12px;
  margin-right: 1px;
  .img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Items = styled.div`
  background-color: white;
  flex: 0.7;
  margin-right: 18px;
  padding: 20px;
  min-width: 80vw;
  max-width: 80vw;
`;

export { Cart, Item, ItemInfo, ItemActions, ItemImage, Items };
