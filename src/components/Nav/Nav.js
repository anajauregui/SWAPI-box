import React from 'react'
import Button from '../Button/Button'
import './Nav.css'

const Nav = ({ handleClick }) => {
	return (
		<div className="header">
			<h1>SWAPI BOX</h1>
			<div className="btn-container">
				<Button title="People" handleClick={handleClick} array="0" />
				<Button title="Planets" handleClick={handleClick} />
				<Button title="Vehicles" handleClick={handleClick} />
			</div>
			<div className="fav-btn-container">
				<Button title="Favorites" handleClick={handleClick} />
			</div>
		</div>
	)
}

export default Nav
