import React, { Component } from 'react'
import Cards from '../Cards/Cards'
import MovieScroll from '../MovieScroll/MovieScroll'
import './CardContainer.css'

const CardContainer = ({ peopleArray, planetArray, vehicleArray, display, scrollData, addToFaves, favesArray }) => {
	const peopleCardArray = peopleArray.map((el, index) => {
		return (
			<Cards
				key={index}
				fullObj={el}
				name={el.name}
				homeworld={`Homeworld: ${el.homeworld}`}
				species={`Species: ${el.species}`}
				population={`Population: ${el.population}`}
				addToFaves={addToFaves}
			/>
		)
	})
	const planetCardArray = planetArray.map((el, index) => {
		return (
			<Cards
				key={index}
				fullObj={el}
				name={el.name}
				terrain={`Terrain: ${el.terrain}`}
				population={`Population: ${el.population}`}
				climate={`Climate: ${el.climate}`}
				residents={`Famous Residents: ${el.residents}`}
				addToFaves={addToFaves}
			/>
		)
	})
	const vehicleCardArray = vehicleArray.map((el, index) => {
		return (
			<Cards
				key={index}
				fullObj={el}
				name={el.name}
				vehicleClass={`Class: ${el.vehicle_class}`}
				model={`Model: ${el.model}`}
				passengers={`# Passengers: ${el.passengers}`}
				addToFaves={addToFaves}
			/>
		)
	})

	const favesCardArray = favesArray.map((fave, index) => <Cards key={index} fullObj={fave} />)

	return (
		<section className="card-container">
			{display === 'People' ? peopleCardArray : null}
			{display === 'Planets' ? planetCardArray : null}
			{display === 'Vehicles' ? vehicleCardArray : null}
			{display === 'Favorites' ? favesCardArray : null}
			{display === 'welcome' && <MovieScroll scrollData={scrollData} />}
		</section>
	)
}

export default CardContainer
