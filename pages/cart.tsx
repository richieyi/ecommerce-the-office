import React from 'react';
import { CartContext } from '../context/CartContextProvider';
import NavBar from '../components/NavBar';

const Cart = () => {
  const { items } = React.useContext(CartContext);

  const renderCart = () => {
    if (items.length === 0) {
      return <h3>Looking a little empty...</h3>;
    }

    return items.map(
      (item: any): JSX.Element => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
        );
      }
    );
  };

  return (
    <div>
      <NavBar />
      {renderCart()}
    </div>
  );
};

export default Cart;
