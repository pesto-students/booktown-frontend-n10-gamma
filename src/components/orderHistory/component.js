import React from 'react';
import { useSession } from '../../hooks';
import { Button, Footer, Header, NotFound } from '../common';
import { GenreicSkeleton } from '../common/skeleton';
import useOrderHistoryContainer from './container';
import {
  HeaderMenue,
  OrderDetails,
  OrderHistoryCard,
  OrderImageContainer,
  OrderItemContainer,
  OrderHistoryContainer,
  OrderHistoryHeader,
  Text,
  Div,
  OrderImageAndDetials,
  OrderInfoContainer,
  BtnContainer
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
                  <HeaderMenue>
                    <Text>ORDER PLACED</Text>
                    <Text>{order.orderDate}</Text>
                  </HeaderMenue>
                  <HeaderMenue>
                    <Text>TOTAL</Text>
                    <Text>$ {order.orderAmount}</Text>
                  </HeaderMenue>
                  <HeaderMenue>
                    <Text>SHIP TO</Text>
                    <Text>{user?.displayName}</Text>
                  </HeaderMenue>
                  <HeaderMenue>
                    <Text>ORDER # {order.orderId}</Text>
                  </HeaderMenue>
                </OrderHistoryHeader>
                <Div className={'order-payment-status'}>
                  <h3>{order.orderStatus}</h3>
                  <p>paid on : {order.orderDate}</p>
                </Div>
                {order.orderItems.map((item) => (
                  <OrderDetails key={item._id}>
                    <OrderItemContainer>
                      <OrderImageAndDetials>
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
                      </OrderImageAndDetials>
                    </OrderItemContainer>
                    <BtnContainer>
                      <Button
                        round={10}
                        className={'buy-btn'}
                        text={'Buy again'}
                      />
                    </BtnContainer>
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
