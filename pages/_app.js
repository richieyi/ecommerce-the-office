import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { CartContextProvider } from '../context/CartContextProvider';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <script src="https://js.stripe.com/v3/" />
        </Head>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </>
    );
  }
}

export default MyApp;
