import React, { Component } from 'react';
import Cards from '../Cards/Cards';

const CardContainer = ({ data }) => {
	let dataArray = data.map((el, index) =>
		<Cards key={index} name={el.name} homeworld={el.homeworld} />
	);

	return (
		<section className="card-container">
			{dataArray}
		</section>
	);
};

export default CardContainer;
