import React from 'react';
import styled from '@emotion/styled';
import { useStripe } from '@stripe/react-stripe-js';
import { CartContext } from '../../context/CartContextProvider';
import { fetchPostJSON } from '../../utils/api-helpers';
import { formatAmount } from '../../utils/amount-helpers';

const Container = styled.div`
  min-width: 300px;
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: unset;
`;

const LineContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const CartCheckout = () => {
  const stripe = useStripe();
  const {
    items,
    incrementItemQuantity,
    decrementItemQuantity
  } = React.useContext(CartContext);

  const renderCart = () => {
    if (items.length === 0) {
      return <h3>Looking a little empty...</h3>;
    }

    return items.map((item: any) => {
      return (
        <ListItem key={item.id}>
          <div>
            <LineContainer>
              <span>{item.name}</span>
              <span>{`${formatAmount(item.amount)} each`}</span>
            </LineContainer>
            <LineContainer>
              <span>
                {`Qty: ${item.quantity}`}
                <button onClick={() => decrementItemQuantity(item.id)}>
                  -
                </button>
                <button onClick={() => incrementItemQuantity(item.id)}>
                  +
                </button>
              </span>
              <span>{`${formatAmount(
                item.amount * item.quantity
              )} total`}</span>
            </LineContainer>
          </div>
        </ListItem>
      );
    });
  };

  const handleCheckout = async () => {
    // Stripe API requires specific properties on each item
    const modifiedItems = items.map((item: any) => {
      delete item.id;
      return {
        ...item,
        amount: item.amount * 100,
        description: 'Funko pop',
        images: [],
        currency: 'usd'
      };
    });
    const response = await fetchPostJSON('/api/checkout', {
      items: modifiedItems
    });
    const { error } = await stripe!.redirectToCheckout({
      sessionId: response.id
    });

    console.warn(error.message);
  };

  return (
    <Container>
      <ListContainer>{renderCart()}</ListContainer>
      {items.length > 0 && <button onClick={handleCheckout}>Check Out</button>}
    </Container>
  );
};

export default CartCheckout;
