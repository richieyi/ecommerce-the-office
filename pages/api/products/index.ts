import { products } from '../../../data';

export default (req: any, res: any): void => {
  res.status(200).json(products);
};
