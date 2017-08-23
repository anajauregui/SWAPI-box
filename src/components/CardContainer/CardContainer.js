import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import MovieScroll from '../MovieScroll/MovieScroll';
import './CardContainer.css';

const CardContainer = ({ peopleArray, planetArray, vehicleArray, display, scrollData }) => {

	const peopleCardArray = peopleArray.map((el, index) => {
		return <Cards key={index} name={el.name} homeworld={`Homeworld: ${el.homeworld}`} species={`Species: ${el.species}`} population={`Population: ${el.population}`}/>
	});
	const planetCardArray = planetArray.map((el, index) => {
		// const residents = el.residents.map(res => res)
		return <Cards key={index} name={el.name} terrain={`Terrain: ${el.terrain}`} population={`Population: ${el.population}`} climate={`Climate: ${el.climate}`} residents={`Famous Residents: ${el.residents}`} />
	});
	const vehicleCardArray = vehicleArray.map((el, index) => {
		return <Cards key={index} name={el.name} vehicleClass={`Class: ${el.vehicle_class}`} model={`Model: ${el.model}`} passengers={`# Passengers: ${el.passengers}`} />
	});

	return (
		<section className="card-container">
			{ (display === 'People') ? peopleCardArray : null }
			{ (display === 'Planets') ? planetCardArray : null }
			{ (display === 'Vehicles') ? vehicleCardArray : null }
			{ display === 'welcome' && <MovieScroll scrollData={scrollData} /> }
		</section>
	);
};

export default CardContainer;
