import React from 'react';
import styled from '@emotion/styled';
import { CartContext } from '../../context/CartContextProvider';
import { formatAmount } from '../../utils/amount-helpers';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  grid-auto-rows: minmax(100px, auto);

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Img = styled.img`
  max-width: 75%;
`;

const ProductCard = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 10px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s;
  line-height: 1.5;
  text-align: center;

  &:hover {
    cursor: pointer;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s;
  }
`;

const Price = styled.span`
  color: #979797;
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
  const { addItem } = React.useContext(CartContext);

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
          <div>
            <Price>{`${formatAmount(amount)}`}</Price>
          </div>
        </ProductCard>
      );
    });
  };

  return <Container>{renderProducts()}</Container>;
};

export default Products;
