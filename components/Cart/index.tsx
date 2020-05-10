import React from 'react';

const Cart = () => {
  const [items, setItems] = React.useState<any>(
    localStorage.getItem('cart') || null
  );

  return <div>cart here</div>;
};

export default Cart;
