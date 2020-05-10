import React from 'react';
import styled from '@emotion/styled';

interface Product {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  gender: string;
  img: string;
}

interface Props {
  products: Product[];
}

const Page = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Img = styled.img`
  max-width: 30%;
  min-width: 200px;
`;

const ProductCard = styled.div`
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &:hover {
    cursor: pointer;
  }
`;

const Products = (props: Props) => {
  const { products } = props;

  const renderProducts = () => {
    return products.map(({ id, name, img }) => {
      return (
        <ProductCard key={id}>
          {img && <Img src={img} />}
          <div>{name}</div>
        </ProductCard>
      );
    });
  };

  return (
    <Page>
      <Container>{renderProducts()}</Container>
    </Page>
  );
};

export default Products;
