import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer } from './styledComponents';

function Input({
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  label,
  className,
  preFix,
  postFix,
  ...props
}) {
  return (
    <InputContainer>
      <label className={error ? 'input-label-error' : ''} htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        {...props}
      />
      {error && (
        <div>
          <span>{error}</span>
        </div>
      )}
    </InputContainer>
  );
}

Input.propTypes = {};

export default Input;
