import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { searchBooks } from '../graphql/queries/product';
import { debouncing } from '../utility/applicationUtility';

const useSearch = () => {
  const history = useHistory();
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchBookQuery] = useLazyQuery(searchBooks, {
    onCompleted: (data) => {
      setSearchLoader(false);
      setSearchResult(data.searchBooks);
    },
    onError: (error) => {
      setSearchLoader(false);
      toast.error(error.message);
    },
    fetchPolicy: 'no-cache'
  });
  /**
   *
   * @param {Object} item
   */
  const onSearchItemSelect = (item) => {
    history.push(`/product-details/${item.id}`);
  };
  /**
   *
   * @param {*} param0
   */
  const onChangeSearch = ({ target: { value } }) => {
    if (value) {
      debouncing(1000)(__handleSearch, [value]);
    } else {
      setSearchResult([]);
      setSearchLoader(false);
    }
  };
  /**
   *
   * @param {String} data
   */
  const __handleSearch = (data) => {
    setSearchLoader(true);
    searchBookQuery({
      variables: {
        query: data
      }
    });
  };

  return {
    onChangeSearch,
    onSearchItemSelect,
    searchResult,
    searchLoader
  };
};

export default useSearch;
