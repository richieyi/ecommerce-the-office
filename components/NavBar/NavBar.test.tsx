import React from 'react';
import { render } from '@testing-library/react';
import { CartContext } from '../../context/CartContext';
import NavBar from './index';

describe('CartItem', () => {
  test('it should render', () => {
    const { getByText } = render(
      <CartContext>
        <NavBar />
      </CartContext>
    );
    expect(getByText('The Office Funko Pops')).toBeInTheDocument();
  });
});
