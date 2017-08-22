import React from 'react';

const Cards = ({ name, homeworld }) => {
	return (
		<div>
			<h3>
				{name}
			</h3>
			<p>
				{homeworld}
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
