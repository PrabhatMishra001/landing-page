import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useDebounce from '../hooks/useDebounce';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Input = styled.input`
  width: 300px;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 24px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 12px rgba(0, 123, 255, 0.3);
  }

  &:hover {
    border-color: #007bff;
  }
`;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchBar;
