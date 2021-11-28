import React from 'react';
import PropTypes from 'prop-types';
import { CheckBoxContainer } from './styledComponent';

/**
 *
 * @param {{
 * checked: boolean,
 * onChange: Function,
 * label: String,
 * disabled: boolean,
 * className: String,
 * error: String,
 * value: String,
 * className: String,
 * }} param0
 * @returns
 */
const CheckBox = ({
  checked = false,
  name = '',
  label,
  onChange = () => {},
  disabled = false,
  error,
  className,
  value,
  ...rest
}) => {
  return (
    <CheckBoxContainer>
      {'label'}
      <input
        disabled={disabled}
        onChange={onChange}
        name={name}
        className={className}
        type="checkbox"
        value={value}
        {...rest}
      />
      <span className="checkmark"></span>
    </CheckBoxContainer>
  );
};

CheckBox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string
};

export default CheckBox;
