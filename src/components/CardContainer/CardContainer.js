import React, { Component } from 'react';
import Cards from '../Cards/Cards';

const CardContainer = ({ peopleArray }) => {
	let cardArray = peopleArray.map((el, index) => {
		return <Cards key={index} name={el.name} homeworld={el.homeworld} species={el.species} population={el.population}/>
	}
	);

	return (
		<section className="card-container">
			{cardArray}
		</section>
	);
};

export default CardContainer;
