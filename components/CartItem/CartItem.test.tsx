import React from 'react';
import { render } from '@testing-library/react';
import CartItem from './';

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
    const { container, getByText } = render(<CartItem {...props} />);
    expect(getByText('Looking a little empty...')).toBeInTheDocument();
  });
});
