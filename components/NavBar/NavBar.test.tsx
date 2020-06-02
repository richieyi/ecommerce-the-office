import React from 'react';
import { render } from '@testing-library/react';
import { CartContextProvider } from '../../context/CartContextProvider';
import NavBar from './index';

describe('CartItem', () => {
  test('it should render', () => {
    const { getByText } = render(
      <CartContextProvider>
        <NavBar />
      </CartContextProvider>
    );
    expect(getByText('The Office Funko Pops')).toBeInTheDocument();
  });
});
