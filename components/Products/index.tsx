import React from 'react';
import styled from '@emotion/styled';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
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
  background: white;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 20px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s;
  line-height: 1.5;
`;

const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ProductInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ProductInfoRight = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Name = styled.div`
  font-weight: bold;
`;
const Price = styled.span`
  color: #979797;
  font-size: 14px;
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
  const [tooltipOpen, setTooltipOpen] = React.useState<boolean>(false);
  const [tooltipId, setTooltipId] = React.useState<number | null>(null);
  const { products } = props;
  const { addItem } = React.useContext(CartContext);

  const handleTooltipOpen = (id: number) => {
    setTooltipId(id);
    setTooltipOpen(true);
    setTimeout(() => {
      setTooltipId(null);
      setTooltipOpen(false);
    }, 500);
  };

  const renderProducts = () => {
    return products.map(({ id, name, img, amount }) => {
      return (
        <ProductCard key={id}>
          {img && <Img src={img} />}
          <ProductInfo>
            <ProductInfoLeft>
              <Name>{name}</Name>
              <div>
                <Price>{`${formatAmount(amount)}`}</Price>
              </div>
            </ProductInfoLeft>
            <ProductInfoRight>
              <Tooltip
                title="Added to cart!"
                disableHoverListener
                disableFocusListener
                disableTouchListener
                open={tooltipOpen && tooltipId === id}
              >
                <IconButton
                  size="small"
                  aria-label="add to cart"
                  onClick={() => {
                    handleTooltipOpen(id);
                    addItem({
                      id,
                      name,
                      amount,
                      quantity: 1
                    });
                  }}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </Tooltip>
            </ProductInfoRight>
          </ProductInfo>
        </ProductCard>
      );
    });
  };

  return <Container>{renderProducts()}</Container>;
};

export default Products;
