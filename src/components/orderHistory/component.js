import React from 'react';
import { useSession } from '../../hooks';
import { Footer, Header, NotFound } from '../common';
import { GenreicSkeleton } from '../common/skeleton';
import useOrderHistoryContainer from './container';
import {
  Div,
  HeaderMenu,
  OrderDetails,
  OrderHistoryCard,
  OrderHistoryContainer,
  OrderHistoryHeader,
  OrderImageAndDetails,
  OrderImageContainer,
  OrderInfoContainer,
  OrderItemContainer,
  Text
} from './styledComponent';

const OrderHistoryComponent = (props) => {
  const { userHistory, handleRedirectToProductDetails } =
    useOrderHistoryContainer();
  const { loading: orderLoading, data: orderData } = userHistory;
  const session = useSession();
  const { user } = session;
  return (
    <>
      <Header />
      <OrderHistoryContainer>
        <h3 className={'order-history-title'}>Your Orders</h3>
        {!orderLoading
          ? orderData.map((order) => (
              <OrderHistoryCard key={order._id}>
                <OrderHistoryHeader>
                  <HeaderMenu>
                    <Text>ORDER PLACED</Text>
                    <Text>{order.orderDate}</Text>
                  </HeaderMenu>
                  <HeaderMenu>
                    <Text>TOTAL</Text>
                    <Text>$ {order.orderAmount}</Text>
                  </HeaderMenu>
                  <HeaderMenu>
                    <Text>SHIP TO</Text>
                    <Text>{user?.displayName}</Text>
                  </HeaderMenu>
                  <HeaderMenu>
                    <Text>ORDER # {order.orderId}</Text>
                  </HeaderMenu>
                </OrderHistoryHeader>
                <Div className={'order-payment-status'}>
                  <h3>{order.orderStatus}</h3>
                  <p>paid on : {order.orderDate}</p>
                </Div>
                {order.orderItems.map((item) => (
                  <OrderDetails key={item._id}>
                    <OrderItemContainer>
                      <OrderImageAndDetails>
                        <OrderImageContainer
                          onClick={() =>
                            handleRedirectToProductDetails(item.id)
                          }>
                          <img src={item?.files?.[0]} alt="product" />
                        </OrderImageContainer>
                        <OrderInfoContainer>
                          <Text bold>{item.title}</Text>
                          <Text numberOfLines={5}>{item.description}</Text>
                        </OrderInfoContainer>
                      </OrderImageAndDetails>
                    </OrderItemContainer>
                  </OrderDetails>
                ))}
              </OrderHistoryCard>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <OrderHistoryCard
                key={item}
                style={{ border: 'none', padding: '0' }}>
                <GenreicSkeleton type={'box'} width="100%" height={'50px'} />
                <GenreicSkeleton type={'line'} width="20%" />
                <GenreicSkeleton type={'line'} width="20%" />
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <GenreicSkeleton
                    type={'box'}
                    width={'150px'}
                    height={'150px'}
                  />
                  <div style={{ width: '70%', margin: '0 10px' }}>
                    <GenreicSkeleton type={'line'} width="20%" />
                    <GenreicSkeleton type={'line'} width="90%" />
                    <GenreicSkeleton type={'line'} width="90%" />
                  </div>
                  <div>
                    <GenreicSkeleton
                      type={'box'}
                      width="100px"
                      height={'50px'}
                    />
                  </div>
                </div>
              </OrderHistoryCard>
            ))}
        {!orderLoading && orderData.length === 0 && <NotFound />}
      </OrderHistoryContainer>
      <Footer />
    </>
  );
};

OrderHistoryComponent.propTypes = {};

export default OrderHistoryComponent;
