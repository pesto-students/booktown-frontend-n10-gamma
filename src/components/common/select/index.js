import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InputError } from '..';

/**
 *
 * @param {{
 * label: String,
 * name: String,
 * value: String,
 * onChange: Function,
 * options: Array<{
 *  label: String,
 *  value: String
 * }>,
 * error: String,
 * disabled: Boolean,
 * multiple: Boolean,
 * width: any,
 * placeholder: String,
 * }} param0
 *
 *
 * @returns
 */
const Select = ({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  disabled = false,
  multiple = false,
  width = 'auto',
  placeholder = 'Select...',
  ...rest
}) => {
  return (
    <SelectContainer width={width}>
      <label className={error ? 'input-label-error' : ''} htmlFor={name}>
        {label}
      </label>
      <select
        multiple={multiple}
        disabled={disabled}
        name={name}
        onChange={onChange}
        {...rest}>
        <option value="" selected="selected" hidden="hidden">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <InputError error={error} />
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: ${(props) => props.width || 'auto'};
  .input-label-error {
    color: red;
  }
  select {
    box-sizing: border-box;
    padding: ${(props) => props.theme.size.sm};
    width: auto;
    border: none;
    outline: none;
    color: ${(props) => props.theme.colors.primaryLight};
    border-radius: ${(props) => props.theme.size.xsm};
    margin: 5px 0;
    background-color: ${(props) => props.theme.colors.secondary};
    option {
      &:hover {
        background-color: ${(props) => props.theme.colors.primaryLight};
      }
    }
  }

  option:selected {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  width: PropTypes.any,
  placeholder: PropTypes.string
};

export default Select;
