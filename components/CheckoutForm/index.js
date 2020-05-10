// import React from 'react';
// import { Elements, useStripe, useElements } from '@stripe/react-stripe-js';

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// const CheckoutForm = () => {
//   // const stripe = useStripe();
//   // const elements = useElements();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe) {
//       return;
//     }
//     console.log('strip', stripe);

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: [
//         {
//           name: 'T-shirt',
//           description: 'Comfortable cotton t-shirt',
//           images: ['https://example.com/t-shirt.png'],
//           amount: 500,
//           currency: 'usd',
//           quantity: 1
//         }
//       ],
//       success_url: 'localhost:3000/',
//       cancel_url: 'localhost:3000/'
//     });

//     const res = session.json();
//     console.log('rez', res);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;
