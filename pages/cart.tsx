import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import CheckoutForm from '../components/CheckoutForm';

const CartPage: NextPage = () => {
  return (
    <Layout>
      <CheckoutForm />
    </Layout>
  );
};

export default CartPage;
