import styled from 'styled-components';

export const OrderHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100vw;
  .order-payment-status {
    padding: 10px 0 0 10px;
  }
  .order-history-title {
    align-self: flex-start;
    padding: 10px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex: 0.2;
  justify-content: center;
  align-items: center;
  .buy-btn {
    width: 100%;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const OrderHistoryCard = styled.div`
  display: flex;
  width: 50%;
  background-color: white;
  flex-direction: column;
  border-radius: 10px;
  margin: 10px 0;
  & {
    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      width: 80%;
    }
  }
  & {
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      width: 98%;
    }
  }
`;

export const HeaderMenue = styled.div``;
export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.numberOfLines || 1};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const OrderHistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.colors.secondary};
  border: 1px solid;
`;
export const OrderDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px 0;
  & {
    @media (max-width: 600px) {
      ${BtnContainer} {
        width: 100% !important;
      }
    }
  }
`;
export const OrderItemContainer = styled.div`
  display: flex;
  flex: 0.9;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Div = styled.div``;
export const OrderImageContainer = styled.div`
  width: 150px;
  height: 150px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const OrderInfoContainer = styled.div`
  margin: 0 10px;
  flex: 0.8;
`;
export const OrderImageAndDetials = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
