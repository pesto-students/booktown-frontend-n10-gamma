import FeatherIcon from 'feather-icons-react';
import { MyButton } from './styledComponets';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../../config/redux/features/cart/cart.utils';

const Button = ({
  text = 'Button',
  onClick = () => {},
  icon = '',
  round = 0,
  ...props
}) => {
  return (
    <MyButton onClick={onClick} round={round} {...props}>
      {text}
      {icon && <FeatherIcon className="styled-icon" icon={icon} size={20} />}
    </MyButton>
  );
};

export default Button;
