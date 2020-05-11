import React from 'react';
import { NextPage } from 'next';
import CartCheckout from '../components/CartCheckout';
import Layout from '../components/Layout';

const CartPage: NextPage = () => {
  return (
    <Layout>
      <CartCheckout />
    </Layout>
  );
};

export default CartPage;
