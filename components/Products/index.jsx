import React from 'react';
import styled from '@emotion/styled';
import { CartContext } from '../../context/CartContextProvider';

// interface Product {
//   id: number;
//   name: string;
//   height: string;
//   mass: string;
//   hair_color: string;
//   skin_color: string;
//   eye_color: string;
//   gender: string;
//   img: string;
//   price: number;
// }

// interface Props {
//   products: Product[];
// }

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

const Products = (props) => {
  const { products } = props;
  const { items, addItem } = React.useContext(CartContext);
  console.log('items', items);

  const renderProducts = () => {
    return products.map(({ id, name, img, price }) => {
      return (
        <ProductCard
          key={id}
          onClick={() =>
            addItem({
              id,
              name,
              description: '',
              images: [],
              amount: price,
              current: 'usd',
              quantity: 1
            })
          }
        >
          {img && <Img src={img} />}
          <div>{name}</div>
          <div>{`$${price}`}</div>
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
