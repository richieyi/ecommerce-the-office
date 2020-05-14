import React from 'react';
import styled from '@emotion/styled';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import { CartContext } from '../../context/CartContextProvider';
import { formatAmount } from '../../utils/amount-helpers';

const LineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
`;

const ItemMainText = styled.span`
  font-weight: bold;
`;

const ItemSubText = styled.span`
  color: gray;
  font-style: italic;
  font-size: 14px;

  button {
    margin-left: 2px;
  }
`;

interface CartItemType {
  id: number;
  name: string;
  amount: number;
  quantity: number;
}

interface Props {
  item: CartItemType;
}

const CartItem = (props: Props): JSX.Element => {
  const {
    item: { id, name, amount, quantity }
  } = props;
  const {
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem
  } = React.useContext(CartContext);

  return (
    <ListItem>
      <div>
        <LineContainer>
          <ItemMainText>{name}</ItemMainText>
          <ItemMainText>{`${formatAmount(amount * quantity)}`}</ItemMainText>
        </LineContainer>
        <LineContainer>
          <ItemSubText>
            {`Qty: ${quantity}`}
            <IconButton
              size="small"
              aria-label="subtract quantity"
              onClick={() => decrementItemQuantity(id)}
            >
              <RemoveIcon color="primary" />
            </IconButton>
            <IconButton
              size="small"
              aria-label="add quantity"
              onClick={() => incrementItemQuantity(id)}
            >
              <AddIcon color="primary" />
            </IconButton>
            <IconButton
              size="small"
              aria-label="remove item"
              onClick={() => removeItem(id)}
            >
              <DeleteIcon color="error" />
            </IconButton>
          </ItemSubText>
          <ItemSubText>{`${formatAmount(amount)} each`}</ItemSubText>
        </LineContainer>
      </div>
    </ListItem>
  );
};

export default CartItem;
