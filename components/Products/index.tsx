import React from 'react';
import styled from '@emotion/styled';

const Img = styled.img`
  max-width: 30%;
`;

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

const Products = (props: Props) => {
  const { products } = props;

  const renderProducts = () => {
    return products.map(({ id, name, height, img }) => {
      return (
        <div key={id}>
          {img && <Img src={img} />}
          <h3>{name}</h3>
        </div>
      );
    });
  };

  return <div>{renderProducts()}</div>;
};

export default Products;
