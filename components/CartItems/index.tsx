import React from 'react';
import styled from '@emotion/styled';
import CartItem from '@components/CartItem';
import { useCart } from '@context/CartContext';

const ListContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
  padding: 15px 25px;
`;

const List = styled.ul`
  list-style: none;
  padding: unset;
  margin: 0 0 25px 0;
`;

const CartItems = (): JSX.Element => {
  const { items } = useCart();

  const renderCart = () => {
    if (items.length === 0) {
      return <h3>Looking a little empty...</h3>;
    }

    return items.map((item: any) => {
      return <CartItem key={item.id} item={item} />;
    });
  };

  return (
    <ListContainer>
      <List>{renderCart()}</List>
    </ListContainer>
  );
};

export default CartItems;
