import React from 'react'
import Button from '../Button/Button'
import './Nav.css'

const Nav = ({ handleClick, display }) => {
	return (
		<div className="header">
			<h1>SWAPI BOX</h1>
			<div className="btn-container">
				<Button title="People" handleClick={handleClick} display={display}/>
				<Button title="Planets" handleClick={handleClick} display={display}/>
				<Button title="Vehicles" handleClick={handleClick} display={display}/>
			</div>
			<div className="fav-btn-container">
				<Button title="Favorites" handleClick={handleClick} display={display}/>
			</div>
		</div>
	)
}

export default Nav;
