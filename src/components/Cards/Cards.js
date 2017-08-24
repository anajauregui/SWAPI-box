import React from 'react';
import './Cards.css';
import PropTypes from 'prop-types';

const Cards = ({ addToFaves, fullObj, favesArray }) => {
	return (
		<div className={favesArray.includes(fullObj) ? 'card fav-card' : 'card' }>
			<div className='card-info'>
				<button className='fav-btn' onClick={e => addToFaves(fullObj)}>
					*
				</button>
				<h2>
					{fullObj.name}
				</h2>
				{fullObj.homeworld ? <p>Homeworld: {fullObj.homeworld}</p> : null}
				{fullObj.terrain ? <p>Terrain: {fullObj.terrain}</p> : null}
				{fullObj.model ? <p>Model: {fullObj.model}</p> : null}

				{fullObj.species ? <p>Species: {fullObj.species}</p> : null}
				{fullObj.climate ? <p>Climate: {fullObj.climate}</p> : null}
				{fullObj.vehicle_class ? <p>Class: {fullObj.vehicle_class}</p> : null}

				{fullObj.population ? <p>Population: {fullObj.population}</p> : null}
				{fullObj.passengers ? <p>Passengers: {fullObj.passengers}</p> : null}

				{fullObj.residents ? <p>Residents: {fullObj.residents}</p> : null}
			</div>
		</div>
	)
}

Cards.propTypes = {
	addToFaves: PropTypes.func,
	fullObj: PropTypes.object.isRequired,
	favesArray: PropTypes.array.isRequired,
}

export default Cards
