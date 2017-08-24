import React from 'react'
import './Button.css'

const Button = ({ title, handleClick, display }) => {
	return (
		<button className={title === display ? 'btn selected-btn' : 'btn'} onClick={handleClick} title={title}>
			{title}
		</button>
	)
}

export default Button
