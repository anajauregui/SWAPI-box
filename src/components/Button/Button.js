import React from 'react';

const Button = ({ title, handleClick }) => {
  return(
    <button onClick={handleClick} title={title}>
      {title}
    </button>
  )
}

export default Button;
