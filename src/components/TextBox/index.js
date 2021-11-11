import React from 'react';
import {any, arrayOf, bool, element, func, oneOf, string} from 'prop-types';
import './index.css';

function TextBox(props) {
  const color = props.readOnly ? 'text-gray-400' : 'text-gray-800';

  return (
    <div className={``}>
      <div className="txt-container">
        <input
          type={props.type ? props.type : 'Text'}
          name={props.label}
          autoComplete="off"
          className={`txt-input ${color}`}
          required
        />
        <label htmlFor={props.label} className={`txt-label ${color}`}>
          <span className={`txt-name`}>{props.label}</span>
        </label>
      </div>
      <p className="text-red-500 text-sm h-2">
        {props.isInvalid ? props.isInvalid : ''}
      </p>
    </div>
  );
}

TextBox.propTypes = {
  classes: string,
  label: string.isRequired,
  type: string,
  value: any,
  placeholder: string,
  onChange: func.isRequired,
  actionButton: element,
  isInvalid: oneOf([false, arrayOf(string)]),
  readOnly: bool,
};

export default TextBox;
