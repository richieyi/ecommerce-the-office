import { NextApiRequest, NextApiResponse } from 'next';
import { products } from '@data/products-data';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json(products);
};
