import React from 'react';
import styled from '@emotion/styled';
import { CartContext } from '../../context/CartContextProvider';

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
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &:hover {
    cursor: pointer;
  }
`;

interface Product {
  id: number;
  name: string;
  img: string;
  amount: number;
}

interface Props {
  products: Product[];
}

const Products = (props: Props) => {
  const { products } = props;
  const { items, addItem } = React.useContext(CartContext);

  const renderProducts = () => {
    return products.map(({ id, name, img, amount }) => {
      return (
        <ProductCard
          key={id}
          onClick={() =>
            addItem({
              id,
              name,
              amount,
              quantity: 1
            })
          }
        >
          {img && <Img src={img} />}
          <div>{name}</div>
          <div>{`$${amount}`}</div>
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
