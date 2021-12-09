import { useMutation } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';
import { addOrderHistory } from '../graphql/mutation/order';
const useUserService = () => {
  const authState = useSelector((state) => state.auth);
  const [addOrderHistoryMutation] = useMutation(addOrderHistory);
  const { user } = authState;
  const handleAddUserOrderHistory = async (payload = {}) => {
    const uid = user?.uid;
    payload.uid = uid;
    return addOrderHistoryMutation({
      variables: {
        payload
      }
    });
  };

  return {
    handleAddUserOrderHistory
  };
};

export default useUserService;
