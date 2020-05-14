import React from 'react';
import styled from '@emotion/styled';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
import { CartContext } from '@context/CartContextProvider';
import { formatAmount } from '@utils/amount-helpers';

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

export interface ProductType {
  id: number;
  name: string;
  img: string;
  amount: number;
}

interface Props {
  data: ProductType;
}

const Product = (props: Props) => {
  const {
    data: { id, name, img, amount }
  } = props;

  const [tooltipOpen, setTooltipOpen] = React.useState<boolean>(false);
  const { addItem } = React.useContext(CartContext);

  const handleTooltipOpen = () => {
    setTooltipOpen(true);
    setTimeout(() => {
      setTooltipOpen(false);
    }, 500);
  };

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
            open={tooltipOpen}
          >
            <IconButton
              size="small"
              aria-label="add to cart"
              onClick={() => {
                handleTooltipOpen();
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
};

export default Product;
