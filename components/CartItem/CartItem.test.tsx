import React from 'react';
import { render } from '@testing-library/react';
import { CartProvider } from '../../context/CartContext';
import CartItem from './index';

const props = {
  item: {
    id: 1,
    name: 'Wilderness Michael',
    amount: 40,
    quantity: 2
  }
};

describe('CartItem', () => {
  test('it should render', () => {
    const { getByText } = render(
      <CartProvider>
        <CartItem {...props} />
      </CartProvider>
    );
    expect(getByText('Wilderness Michael')).toBeInTheDocument();
  });
});
