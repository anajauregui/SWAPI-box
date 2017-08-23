import React from 'react';
import './Card.css';

const Cards = ({ name, homeworld, species, population, vehicleClass, model, passengers, terrain, climate, residents }) => {
	return (
		<div className='card'>
			<h3>
				{name}
			</h3>
			<p>
				{homeworld}{terrain}{model}
			</p>
			<p>
				{species}{climate}{vehicleClass}
			</p>
			<p>
				{population}{passengers}
			</p>
			<p>
				{residents}
			</p>
		</div>
	);
};

export default Cards;

// <article>
// 	<p>
// 		{name}
// 	</p>
// 	<p>
// 		{homeworld}
// 	</p>
// 	<p>
// 		{species}
// 	</p>
// 	<p>
// 		{population}
// 	</p>
// 	<p>
// 		{terrain}
// 	</p>
// 	<p>
// 		{climate}
// 	</p>
// 	<p>
// 		{residents}
// 	</p>
// 	<p>
// 		{model}
// 	</p>
// 	<p>
// 		{vehClass}
// 	</p>
// 	<p>
// 		{passengers}
// 	</p>
// </article>
