import { NextApiRequest, NextApiResponse } from 'next';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body.items,
    // TODO: Success page
    success_url: `${req.headers.origin}/`,
    // TODO: Cancel page
    cancel_url: `${req.headers.origin}/`
  });

  res.status(200).json(session);
};
