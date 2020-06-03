import React from 'react';
import styled from '@emotion/styled';
import Product, { ProductType } from '@components/Product';
import SearchBar from '@components/SearchBar';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  grid-auto-rows: minmax(100px, auto);

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

interface Props {
  products: ProductType[];
}

const Products = (props: Props): JSX.Element => {
  const [searchValue, setsearchValue] = React.useState<string>('');
  const [filteredProducts, setFilteredProducts] = React.useState<any>([]);
  const { products } = props;

  React.useEffect(() => {
    if (searchValue !== '') {
      const filtered = products.filter((product: any) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchValue]);

  const handleSearch = (value: string): void => {
    setsearchValue(value);
  };

  const renderProducts = (): JSX.Element[] => {
    const productsToUse = searchValue !== '' ? filteredProducts : products;
    return productsToUse.map((product: any) => {
      return <Product key={product.id} data={product} />;
    });
  };

  return (
    <Container>
      <SearchBar searchValue={searchValue} onChange={handleSearch} />
      {renderProducts()}
    </Container>
  );
};

export default Products;
