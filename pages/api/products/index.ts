import { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../products-data';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json(products);
};
