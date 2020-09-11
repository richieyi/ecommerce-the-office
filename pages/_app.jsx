import React from 'react';
import App from 'next/app';
import { CartProvider } from '@context/CartContext';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    );
  }
}

export default MyApp;
