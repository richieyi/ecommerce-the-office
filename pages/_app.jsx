import React from 'react';
import App from 'next/app';
import { CartContextProvider } from '@context/CartContextProvider';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    );
  }
}

export default MyApp;
