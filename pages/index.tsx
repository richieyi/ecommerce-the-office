import React from 'react';
import { NextPage } from 'next';
import useSWR from 'swr';
import Layout from '@components/Layout';
import Products from '@components/Products';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const HomePage: NextPage = () => {
  const { data } = useSWR('/api/products', fetcher);

  if (!data) return <div />;

  return (
    <Layout>
      <main>
        <Products products={data} />
      </main>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </Layout>
  );
};

export default HomePage;
