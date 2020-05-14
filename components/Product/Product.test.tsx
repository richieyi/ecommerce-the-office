import React from 'react';
import { render } from '@testing-library/react';
import Product from './index';

const props = {
  data: {
    id: 1,
    name: 'Wilderness Michael',
    img: '',
    amount: 100
  }
};

describe('<Product />', () => {
  it('should render', () => {
    const { getByText } = render(<Product {...props} />);
    expect(getByText('Wilderness Michael')).toBeInTheDocument();
  });
});
