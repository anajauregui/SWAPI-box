import React from 'react';

const Cards = ({ name, homeworld, species, population }) => {
	return (
		<div>
			<h3>
				Name: {name}
			</h3>
			<p>
				Homeworld: {homeworld}
			</p>
			<p>
				Species: {species}
			</p>
			<p>
				Population of Homeworld: {population}
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
