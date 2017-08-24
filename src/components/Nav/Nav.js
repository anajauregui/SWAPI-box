import React from 'react'
import Button from '../Button/Button'
import './Nav.css'
import PropTypes from 'prop-types'

const Nav = ({ handleClick, display, data }) => {
	return (
		<div className="header">
			<h1>SWAPI BOX</h1>
			{data &&
				<div className="btn-container">
					<Button title="People" handleClick={handleClick} display={display} />
					<Button title="Planets" handleClick={handleClick} display={display} />
					<Button title="Vehicles" handleClick={handleClick} display={display} />
					<Button title="Favorites" handleClick={handleClick} display={display} />
				</div>}
		</div>
	)
}

Nav.propTypes = {
	handleClick: PropTypes.func.isRequired,
	display: PropTypes.string.isRequired,
	data: PropTypes.array
}

export default Nav
