import fetch from 'isomorphic-unfetch';
import NavBar from '../components/NavBar';
import { useState, useEffect } from 'react';
import { CartContext } from '../context/CartContextProvider';

export async function fetchPostJSON(url, data) {
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

const Cart = () => {
  const [stripe, setStripe] = useState(null);
  const { items } = React.useContext(CartContext);
  console.log('checkout', items);

  useEffect(
    () => setStripe(window.Stripe(process.env.STRIPE_PUBLISHABLE_KEY)),
    []
  );

  const goToCheckout = async (e) => {
    e.preventDefault();
    const response = await fetchPostJSON('/api/build-checkout', {
      amount: 2500,
      items
    });
    const { error } = await stripe
      .redirectToCheckout({
        sessionId: response.id
      })
      .then(function (result) {
        console.log(result.error.message);
      });

    console.warn(error.message);
  };

  const renderCart = () => {
    if (items.length === 0) {
      return <h3>Looking a little empty...</h3>;
    }

    return items.map((item) => {
      return (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <NavBar />
      {renderCart()}
      <button onClick={goToCheckout}>Pay</button>
    </div>
  );
};

export default Cart;