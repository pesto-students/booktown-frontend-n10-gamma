import FeatherIcon from 'feather-icons-react';
import React from 'react';
import {
  SearchContainer,
  SearchInputContainer,
  SearchResultsContainer
} from './styledComponents';

function SearchBar({ onChangeSearch }) {
  return (
    <SearchContainer>
      <SearchInputContainer>
        <input onChange={onChangeSearch} type="text" placeholder="Search" />
        <FeatherIcon
          className="search-icon"
          style={{ color: 'black' }}
          icon="search"
          size="20"
        />
      </SearchInputContainer>
      <SearchResultsContainer></SearchResultsContainer>
    </SearchContainer>
  );
}

SearchBar.propTypes = {};
export default SearchBar;
