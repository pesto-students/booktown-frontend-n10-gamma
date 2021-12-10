import styled from 'styled-components';

const CartMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 18px 0 18px;
  align-items: flex-start;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const Item = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }

  .Price {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
    padding-top: 10px;
    padding-top: 10px;
    @media (min-width: 992px) {
      padding-top: 0px;
      padding-top: 0px;
    }
  }
`;

const ItemInfo = styled.div`
  display: flex;
  .infoTitle {
    margin-left: 16px;
    max-width: 250px;
    h4 {
      margin: 0;
    }
    p {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  .infoStock {
    margin-top: 4px;
    color: #007600;
    margin-left: 16px;
  }

  @media (min-width: 992px) {
    flex-grow: 1;
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
      box-shadow: 0 5px 5px rgba(15, 17, 17, 0.15);
      cursor: pointer;
    }
  }

  .itemActionsDivider {
    margin-left: 8px;
    margin-right: 8px;
    color: #dddddd;
    font-weight: bold;
  }

  .itemDelete {
    color: black;
    cursor: pointer;
  }
  i {
    &:hover {
      color: red !important;
    }
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
  flex: 0.9;
  margin-right: 18px;
  padding: 20px;
  min-width: 80vw;
  max-width: 80vw;

  @media (min-width: 992px) {
    min-width: auto;
  }
`;

const ItemTotal = styled.div`
  background-color: white;
  padding: 20px;
  padding-top: 0;
  min-width: 80vw;
  margin-right: 18px;
  max-width: 80vw;

  @media (min-width: 992px) {
    background-color: white;
    flex: 0.3;
    padding: 20px;
    min-width: 300px;
    margin-top: 0;
  }

  h3 {
    @media (min-width: 992px) {
      margin-left: 0;
    }
  }

  .itemTotal-price {
    @media (min-width: 992px) {
      margin-left: 8px;
    }
  }

  button {
    width: 280px;
    @media (min-width: 992px) {
      margin-left: 0;
      text-align: center;
      width: 300px;
    }
  }
`;

const Address = styled.div`
  Modal {
    Modal.Footer {
      .closeButton {
        border-radius: 35px;
        &:hover {
          background-color: white;
          color: black;
        }
      }
    }
  }
`;

export {
  Address,
  CartMain,
  Item,
  ItemInfo,
  ItemActions,
  ItemImage,
  Items,
  ItemTotal
};
