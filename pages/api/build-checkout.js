const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  console.log('HERE', req.body);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    // line_items: [
    //   {
    //     name: 'T-shirt',
    //     description: 'Comfortable cotton t-shirt',
    //     images: ['https://example.com/t-shirt.png'],
    //     amount: req.body.amount,
    //     currency: 'usd',
    //     quantity: 2
    //   }
    // ],
    // line_items: req.body.items,
    line_items: [
      {
        name: 'Banjo Andy',
        description: 'Comfortable cotton',
        images: [],
        amount: 23,
        currency: 'usd',
        quantity: 4
      }
    ],
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel'
  });

  res.json(session);
};
