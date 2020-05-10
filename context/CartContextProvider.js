import React from 'react';

export const CartContext = React.createContext();

export const CartContextProvider = (props) => {
  const [items, setItems] = React.useState([]);
  // Faster to increment count than
  // Iterating and adding up quantity each time
  // For cart qty number
  const [count, setCount] = React.useState(0);

  // Hashmap with ID and quantity vs array?
  // Hashmap pros: easy to incremenet qty
  // Hashmap cons: need to filter in cart for data
  // Array props: easy to push into array
  // Array cons: need to filter in cart for qty data
  // Result -> array because stripe requires array of items with qty
  // Constant time with cart.length O(1) > linear time with Object.entries(cart) O(n)
  // Constant time to add item and get cart length
  // Also need arrays to render cart w/ qty and for stripe checkout
  const addItem = (newItem) => {
    const idx = items.findIndex((item) => item.id === newItem.id);
    if (idx >= 0) {
      const newItems = [...items];
      newItems[idx].quantity += 1;
      setItems([...newItems]);
    } else {
      setItems([...items, newItem]);
    }
    setCount(count + 1);
  };

  return (
    <CartContext.Provider
      value={{
        count,
        items,
        addItem
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
