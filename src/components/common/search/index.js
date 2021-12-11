import { LoaderIcon } from 'react-hot-toast';
import {
  SearchContainer,
  SearchItem,
  SearchResultsContainer,
  SearchInput
} from './styledComponents';
function SearchBar({
  onChange = () => {},
  onSearchItemSelect = () => {},
  searchData = [],
  placeholder = 'Search Books',
  searchContainerClass = '',
  searchBoxClass = '',
  searchLoader = false
}) {
  return (
    <>
      <SearchContainer className={`${searchContainerClass}`}>
        <SearchInput
          onChange={onChange}
          className={`${searchBoxClass}`}
          type={'search'}
          placeholder={placeholder}
        />
      </SearchContainer>
      <SearchResultsContainer>
        {searchLoader ? (
          <div className="search-loader">
            <LoaderIcon
              style={{ height: '30px', width: '30px', padding: '10px' }}
            />{' '}
            Loading...
          </div>
        ) : (
          searchData.map((item, index) => (
            <SearchItem key={item.id} onClick={() => onSearchItemSelect(item)}>
              {item.title}
            </SearchItem>
          ))
        )}
      </SearchResultsContainer>
    </>
  );
}

SearchBar.propTypes = {};
export default SearchBar;
