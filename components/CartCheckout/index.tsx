import React from 'react';
import styled from '@emotion/styled';
import { useStripe } from '@stripe/react-stripe-js';
import Button from '@material-ui/core/Button';
import { useCart } from '../../context/CartContext';
import { fetchPostJSON } from '@utils/api-helpers';
import { formatAmount } from '@utils/amount-helpers';
import CartItems from '@components/CartItems';

const Container = styled.div`
  margin-top: 50px;
  min-width: 350px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  @media only screen and (max-width: 400px) {
    min-width: 250px;
  }
`;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
`;

const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CartCheckout = (): JSX.Element => {
  const stripe = useStripe();
  const { items } = useCart();

  const renderTotal = () => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].quantity;
    }

    return total;
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

  const renderTotalArea = () => {
    return (
      <TotalContainer>
        <Total>{`Total: ${formatAmount(renderTotal())}`}</Total>
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Check Out
        </Button>
      </TotalContainer>
    );
  };

  return (
    <Container>
      <CartItems />
      {items.length > 0 && renderTotalArea()}
    </Container>
  );
};

export default CartCheckout;
