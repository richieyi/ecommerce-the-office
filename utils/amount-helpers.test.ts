import { formatAmount } from './amount-helpers';

test('it should format amount to dollars', () => {
  expect(formatAmount(123)).toEqual('$123.00');
  expect(formatAmount(1234)).toEqual('$1,234.00');
  expect(formatAmount(12345)).toEqual('$12,345.00');
});
