import React from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  // Faster to increment count than iterating and
  // adding up quantity each time for cart qty
  const [count, setCount] = React.useState(0);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    // Check to see if window exists for localStorage
    if (typeof window !== 'undefined') {
      // Persistent cart
      const items = localStorage.getItem('cart');
      if (items) {
        const parsedItems = JSON.parse(items);
        setItems(parsedItems);

        let count = 0;
        for (let i = 0; i < parsedItems.length; i++) {
          count += parsedItems[i].quantity;
        }
        setCount(count);
      }
    }
  }, []);

  // Data type choices: hashmap with id w/ quantity vs array?
  // Result -> array because stripe requires array of items with qty
  // and to easily render cart items w/ qty
  const addItem = (newItem) => {
    const idx = items.findIndex((item) => item.id === newItem.id); // O(n)
    if (idx >= 0) {
      const newItems = [...items];
      newItems[idx].quantity += 1; // O(n)
      localStorage.setItem('cart', JSON.stringify([...newItems]));
      setItems([...newItems]);
    } else {
      setItems([...items, newItem]); // O(1)
      localStorage.setItem('cart', JSON.stringify([...items, newItem]));
    }
    // => O(n^2) or O(n)
    setCount(count + 1);
  };

  const removeItem = (id) => {
    const idx = items.findIndex((item) => item.id === id);
    const newItems = [...items];
    newItems.splice(idx, 1);
    localStorage.setItem('cart', JSON.stringify([...newItems]));
    setItems([...newItems]);
    setCount(newItems.length);
  };

  const incrementItemQuantity = (id) => {
    const idx = items.findIndex((item) => item.id === id);
    if (idx >= 0) {
      const newItems = [...items];
      newItems[idx].quantity += 1;
      localStorage.setItem('cart', JSON.stringify([...newItems]));
      setItems([...newItems]);
      setCount(count + 1);
    }
  };

  const decrementItemQuantity = (id) => {
    const idx = items.findIndex((item) => item.id === id);
    if (idx >= 0) {
      const newItems = [...items];
      if (newItems[idx].quantity === 1) {
        removeItem(id);
      } else {
        newItems[idx].quantity -= 1;
        localStorage.setItem('cart', JSON.stringify([...newItems]));
        setItems([...newItems]);
        setCount(count - 1);
      }
    }
  };

  const value = {
    count,
    items,
    addItem,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};
