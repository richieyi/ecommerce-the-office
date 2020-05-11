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

const ListContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
  padding: 15px 25px;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
`;

const List = styled.ul`
  list-style: none;
  padding: unset;
  margin: 0 0 25px 0;
`;

const LineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
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

const CartCheckout = (): JSX.Element => {
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
                <IconButton
                  size="small"
                  aria-label="subtract quantity"
                  onClick={() => decrementItemQuantity(item.id)}
                >
                  <RemoveIcon color="primary" />
                </IconButton>
                <IconButton
                  size="small"
                  aria-label="add quantity"
                  onClick={() => incrementItemQuantity(item.id)}
                >
                  <AddIcon color="primary" />
                </IconButton>
                <IconButton
                  size="small"
                  aria-label="remove item"
                  onClick={() => removeItem(item.id)}
                >
                  <DeleteIcon color="error" />
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
      <ListContainer>
        <List>{renderCart()}</List>
      </ListContainer>
      {items.length > 0 && renderTotalArea()}
    </Container>
  );
};

export default CartCheckout;
