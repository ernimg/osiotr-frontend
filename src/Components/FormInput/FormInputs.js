import React from 'react';
import './Input.css';
const FormInputs = props => {
  let inputElement = null;
  switch (props.elementType) {
    case 'input':
      inputElement = (
        <span className='form__item'>
          <p className='input-name'>{props.elementConfig.name}</p>
          <input
            className='input input--text'
            {...props.elementConfig}
            value={props.value}
            onChange={props.inputHandler}
          />
        </span>
      );
      break;
    case 'textarea':
      inputElement = (
        <span className='form__item'>
          <p className='input-name'>{props.elementConfig.name}</p>
          <textarea
            className='input input--textArea'
            {...props.elementConfig}
            value={props.value}
            onChange={props.inputHandler}
          />
        </span>
      );
      break;
    case 'select':
      inputElement = (
        <span className='form__item'>
          <p className='input-name'>{props.elementConfig.name}</p>
          <select
            className='input input--select'
            value={props.value}
            onChange={props.inputHandler}
          >
            {props.elementConfig.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.display}
              </option>
            ))}
          </select>
        </span>
      );
      break;
    default:
      inputElement = (
        <input className='input' {...props.elementConfig} value={props.value} />
      );
  }
  return <>{inputElement}</>;
};

export default FormInputs;
