import React, { Component } from 'react'
import Cards from '../Cards/Cards'
import MovieScroll from '../MovieScroll/MovieScroll'
import './CardContainer.css'

const CardContainer = ({ peopleArray, planetArray, vehicleArray, display, scrollData, addToFaves, favesArray }) => {
	const peopleCardArray = peopleArray.map((el, index) => {
		return <Cards key={index} fullObj={el} addToFaves={addToFaves} favesArray={favesArray} />
	})
	const planetCardArray = planetArray.map((el, index) => {
		return <Cards key={index} fullObj={el} addToFaves={addToFaves} favesArray={favesArray} />
	})
	const vehicleCardArray = vehicleArray.map((el, index) => {
		return <Cards key={index} fullObj={el} addToFaves={addToFaves} favesArray={favesArray} />
	})

	const favesCardArray =
			 favesArray.map((fave, index) =>
					<Cards key={index} fullObj={fave} addToFaves={addToFaves} favesArray={favesArray} />)

	return (
		<section className="card-container">
			{display === 'People' ? peopleCardArray : null}
			{display === 'Planets' ? planetCardArray : null}
			{display === 'Vehicles' ? vehicleCardArray : null}
			{display === 'Favorites' ? favesCardArray : null}
			{favesArray.length === 0 && display === 'Favorites' ? <p>No Favorites...</p> : null}
			{display === 'welcome' && <MovieScroll scrollData={scrollData} />}
		</section>
	)
}

export default CardContainer
