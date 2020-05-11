import React from 'react';
import fetch from 'isomorphic-unfetch';
import { useStripe } from '@stripe/react-stripe-js';
import { CartContext } from '../../context/CartContextProvider';

export async function fetchPostJSON(url: string, data?: {}) {
  try {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data || {}) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  } catch (err) {
    throw new Error(err.message);
  }
}

const CheckoutForm = () => {
  const stripe = useStripe();
  const { items } = React.useContext(CartContext);

  const renderCart = () => {
    if (items.length === 0) {
      return <h3>Looking a little empty...</h3>;
    }

    return items.map((item: any) => {
      return (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
        </div>
      );
    });
  };

  const handleCheckout = async () => {
    // Stripe API requires specific properties on each item
    const modifiedItems = items.map((item: any) => {
      delete item.id;
      return {
        ...item,
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
    <>
      {renderCart()}
      <button onClick={handleCheckout}>Check Out</button>
    </>
  );
};

export default CheckoutForm;
