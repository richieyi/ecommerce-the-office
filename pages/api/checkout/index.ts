import { NextApiRequest, NextApiResponse } from 'next';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body.items,
    billing_address_collection: 'required',
    shipping_address_collection: {
      allowed_countries: ['US']
    },
    // TODO: Customer info
    // customer: '',
    // customer_email '',
    // TODO: Success page
    success_url: `${req.headers.origin}/`,
    cancel_url: `${req.headers.origin}/cart`
  });

  res.status(200).json(session);
};
