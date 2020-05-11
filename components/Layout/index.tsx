import React from 'react';
import Head from 'next/head';
import NavBar from '../NavBar';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

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
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
      <footer>
        <a
          href="https://github.com/yirichie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by Richie Yi
        </a>
      </footer>
    </div>
    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </Elements>
);

export default Layout;
