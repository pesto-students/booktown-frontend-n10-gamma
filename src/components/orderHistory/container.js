import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getUserHistory } from '../../graphql/queries/order';
import { useHistory } from 'react-router';
/**
 *
 * @returns {
 * userHistory:{
 * loading: boolean,
 * error: object,
 * data: object,
 * }
 * }
 */
const useOrderHistoryContainer = () => {
  const history = useHistory();
  const getUserHistoryQuery = useQuery(getUserHistory, {
    fetchPolicy: 'no-cache'
  });
  const [userHistory, setUserHistory] = useState({
    data: [],
    error: null,
    loading: true
  });

  useEffect(() => {
    if (getUserHistoryQuery.data && !getUserHistoryQuery.loading) {
      setUserHistory(() => ({
        data: getUserHistoryQuery.data?.getUserHistory?.data,
        error: null,
        loading: false
      }));
    }
    if (getUserHistoryQuery.error && !getUserHistoryQuery.loading) {
      setUserHistory(() => ({
        data: [],
        error: getUserHistoryQuery.error,
        loading: false
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUserHistoryQuery.loading]);

  useEffect(() => {
    getUserHistoryQuery.refetch();
  }, [getUserHistoryQuery]);
  const handleRedirectToProductDetails = (productId) => {
    history.push(`/product-details/${productId}`);
  };
  return {
    userHistory,
    handleRedirectToProductDetails
  };
};

export default useOrderHistoryContainer;
