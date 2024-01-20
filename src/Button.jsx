// Button.jsx
import React from 'react';
import './Button.css'
function Button(props) {
  return (
    <button onClick={() => props.onClickFunction(props.increment)}>
      +{props.increment}
    </button>
  );
}

export default Button;
