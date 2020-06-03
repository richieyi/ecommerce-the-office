import React from 'react';
import styled from '@emotion/styled';
import Product, { ProductType } from '@components/Product';
import SearchBar from '@components/SearchBar';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  grid-auto-rows: minmax(100px, auto);

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

interface Props {
  products: ProductType[];
}

const Products = (props: Props): JSX.Element => {
  const { products } = props;

  const renderProducts = () => {
    return products.map((product) => {
      return <Product key={product.id} data={product} />;
    });
  };

  return (
    <Container>
      <SearchBar />
      {renderProducts()}
    </Container>
  );
};

export default Products;
