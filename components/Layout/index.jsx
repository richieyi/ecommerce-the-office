import React from 'react';
import Head from 'next/head';
import NavBar from '../NavBar';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const Layout = ({ children, title = 'TypeScript Next.js Stripe Example' }) => (
  <Elements stripe={stripePromise}>
    <Head>
      <title>{title}</title>
    </Head>
    <NavBar />
    {children}
  </Elements>
);

export default Layout;
