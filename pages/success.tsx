import React from 'react';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import Layout from '../components/Layout';

const Container = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const SuccessPage: NextPage = () => {
  React.useEffect(() => {
    localStorage.removeItem('cart');
  }, []);

  return (
    <Layout>
      <Container>
        <h2>Order confirmed!</h2>
        <p>Thank you for your purchase.</p>
      </Container>
    </Layout>
  );
};

export default SuccessPage;
