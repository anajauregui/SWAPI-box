import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ title, handleClick, display }) => {
	return (
		<button className={title === display ? 'btn selected-btn' : 'btn'} onClick={handleClick} title={title}>
			{title}
		</button>
	)
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
	display: PropTypes.string.isRequired,
}

export default Button
