import React from 'react';
import './Button.css';

const Button = ({ title, handleClick }) => {
  return(
    <button className='btn' onClick={handleClick} title={title}>
      {title}
    </button>
  )
}

export default Button;
