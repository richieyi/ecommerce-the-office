import React from 'react';

export const CartContext = React.createContext();

export const CartContextProvider = (props) => {
  const [items, setItems] = React.useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
