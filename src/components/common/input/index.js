import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer } from './styledComponents';
import {} from 'react-bootstrap';
import { InputError } from '..';
/**
 *
 * @param {{
 * type: ('number'|'password'|'text'|'email'),
 * name: String,
 * value: String,
 * placeholder: String,
 * onChange: Function,
 * error: String,
 * label: String,
 * className: String,
 * preFix : any,
 * postFix : any,
 * multiline : Boolean,
 * rows : Number,
 * cols : Number,
 * disabled : Boolean
 * width: any
 * }} param0
 * @returns
 */
function Input({
  type = 'text',
  name,
  value,
  onChange = () => {},
  placeholder,
  error,
  label,
  className,
  preFix,
  postFix,
  multiline = false,
  rows = 5,
  cols = 50,
  disabled = false,
  width = 'auto',
  ...props
}) {
  return (
    <InputContainer width={width}>
      <label className={error ? 'input-label-error' : ''} htmlFor={name}>
        {label}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={className}
          rows={rows}
          cols={cols}
          {...props}
        />
      ) : (
        <>
          <div className="input-container">
            {preFix && <span className="input-prefix">{preFix}</span>}
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={className}
              {...props}
            />
            {postFix && <span className="input-postfix">{postFix}</span>}
          </div>
        </>
      )}
      <InputError error={error} />
    </InputContainer>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  preFix: PropTypes.any,
  postFix: PropTypes.any,
  rows: PropTypes.number,
  cols: PropTypes.number,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  width: PropTypes.any
};

export default React.memo(Input);
