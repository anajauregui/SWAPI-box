import React from 'react'
import Button from '../Button/Button'
import './Card.css'

const Cards = ({
	name,
	homeworld,
	species,
	population,
	vehicleClass,
	model,
	passengers,
	terrain,
	climate,
	residents,
	addToFaves,
	fullObj
}) => {
	return (
		<div className="card">
			<button className={name} onClick={e => addToFaves(fullObj)}>
				Favorites
			</button>
			<h3>
				{name}
				{fullObj.name}
			</h3>
			<p>
				{homeworld}
				{terrain}
				{model}
			</p>
			<p>
				{species}
				{climate}
				{vehicleClass}
			</p>
			<p>
				{population}
				{passengers}
			</p>
			<p>
				{residents}
			</p>
		</div>
	)
}

export default Cards
