import React from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import NavBar from '../NavBar';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const Container = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

interface Props {
  children: any;
  title?: string;
}

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY!);

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'The Office Funko Pops'
}) => (
  <Elements stripe={stripePromise}>
    <Container>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
          key="google-font-roboto"
        />
      </Head>
      <NavBar />
      {children}
    </Container>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Segoe UI,
          Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
          Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </Elements>
);

export default Layout;
