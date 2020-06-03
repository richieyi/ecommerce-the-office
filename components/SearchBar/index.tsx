import React from 'react';
import TextField from '@material-ui/core/TextField';

interface Props {
  searchValue: string;
  onChange: (value: string) => void;
}

const SearchBar = (props: Props): JSX.Element => {
  const { searchValue, onChange } = props;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <TextField
      variant="outlined"
      label="Search"
      onChange={handleSearch}
      value={searchValue}
    />
  );
};

export default SearchBar;
