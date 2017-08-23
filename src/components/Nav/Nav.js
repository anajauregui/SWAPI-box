import React from 'react';
import Button from '../Button/Button';
import './Nav.css';

const Nav = ({handleClick}) => {
  return(
    <div className='header'>
      <h1>SWAPI BOX</h1>
      <div className='btn-container'>
        <Button title='People' handleClick={handleClick} />
        <Button title='Planets' handleClick={handleClick} />
        <Button title='Vehicles' handleClick={handleClick} />
      </div>
    </div>
  )
}

export default Nav;
