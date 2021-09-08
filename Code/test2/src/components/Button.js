import React from 'react';
import './Button.css';

const Button = (props) => (
  <button className={props.buttonType}>{props.label}</button>
)

const ButtonV2 = (props) => (
  // <button style={{color: props.color}} className={`btn btn-${props.buttonType}`}>{props.children}</button>
  <button className={`btn btn-${props.buttonType}`}>{props.children}</button>
  )

export default Button;
export { ButtonV2};

//export { Button, ButtonV2 }