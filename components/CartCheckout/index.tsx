import React from 'react';
import styled from '@emotion/styled';
import { useStripe } from '@stripe/react-stripe-js';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

import { CartContext } from '../../context/CartContextProvider';
import { fetchPostJSON } from '../../utils/api-helpers';
import { formatAmount } from '../../utils/amount-helpers';

const Container = styled.div`
  min-width: 300px;
  max-width: 500px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 400px) {
    min-width: 250px;
  }
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
  line-height: 1.4;
`;

const CartMainText = styled.span`
  font-weight: bold;
`;

const CartSubText = styled.span`
  color: gray;
  font-style: italic;
  font-size: 14px;

  button {
    margin-left: 2px;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CartCheckout = () => {
  const stripe = useStripe();
  const {
    items,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem
  } = React.useContext(CartContext);

  const renderTotal = () => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].quantity;
    }

    return total;
  };

  const renderCart = () => {
    if (items.length === 0) {
      return <h3>Looking a little empty...</h3>;
    }

    return items.map((item: any) => {
      return (
        <ListItem key={item.id}>
          <div>
            <LineContainer>
              <CartMainText>{item.name}</CartMainText>
              <CartMainText>{`${formatAmount(
                item.amount * item.quantity
              )}`}</CartMainText>
            </LineContainer>
            <LineContainer>
              <CartSubText>
                {`Qty: ${item.quantity}`}
                <IconButton size="small" aria-label="subtract quantity">
                  <RemoveIcon
                    onClick={() => decrementItemQuantity(item.id)}
                    color="primary"
                  />
                </IconButton>
                <IconButton size="small" aria-label="add quantity">
                  <AddIcon
                    onClick={() => incrementItemQuantity(item.id)}
                    color="primary"
                  />
                </IconButton>
                <IconButton size="small" aria-label="remove item">
                  <DeleteIcon
                    onClick={() => removeItem(item.id)}
                    color="error"
                  />
                </IconButton>
              </CartSubText>
              <CartSubText>{`${formatAmount(item.amount)} each`}</CartSubText>
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
      {items.length > 0 && (
        <Total>{`Total: ${formatAmount(renderTotal())}`}</Total>
      )}
      {items.length > 0 && (
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Check Out
        </Button>
      )}
    </Container>
  );
};

export default CartCheckout;
