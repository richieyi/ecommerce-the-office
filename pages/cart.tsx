import React from 'react';
import { CartContext } from '../context/CartContextProvider';

const Cart = () => {
  const { items, addItem } = React.useContext(CartContext);

  const renderCart = () => {
    return items.map(
      (item: any): JSX.Element => {
        return (
          <div>
            {item.name}
            {item.price}
          </div>
        );
      }
    );
  };

  return <div>{renderCart()}</div>;
};

export default Cart;
