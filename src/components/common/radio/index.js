import React from 'react';
import PropTypes from 'prop-types';
import { RadioWrapper, Mark, Input, Label } from './styledComponent';

/**
 *
 * @param {{
 *  name: String,
 *  value: String,
 *  onChange: Function,
 *  checked: boolean,
 *  disabled: boolean,
 *  label: String,
 * }} param0
 * @returns
 */
const Radio = ({
  name,
  value,
  label,
  onChange = () => {},
  checked,
  disabled = false,
  className,
  children,
  ...props
}) => {
  return (
    <RadioWrapper>
      <Label>
        <Input
          name={name}
          type="radio"
          className={className}
          onChange={onChange}
          disabled={disabled}
          value={value}
          {...props}
        />
        <Mark />
        {label}
        {children}
      </Label>
    </RadioWrapper>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Radio;
