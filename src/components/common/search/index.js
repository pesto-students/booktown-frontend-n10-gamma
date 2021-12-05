import FeatherIcon from 'feather-icons-react';
import React from 'react';
import {
  SearchContainer,
  SearchInputContainer,
  SearchResultsContainer
} from './styledComponents';

function SearchBar(props) {
  return (
    <SearchContainer>
      <SearchInputContainer>
        <input type="text" placeholder="Search" onChange={props.onChange} />
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
