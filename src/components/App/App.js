import React, { Component } from 'react'
import CardContainer from '../CardContainer/CardContainer'
import Nav from '../Nav/Nav'
import MovieScroll from '../MovieScroll/MovieScroll'

export default class App extends Component {
	constructor() {
		super()

		this.state = {
			data: null,
			display: 'welcome',
			favoriteCards: []
		}

		this.getHomeWorld = this.getHomeWorld.bind(this)
		this.getSpecies = this.getSpecies.bind(this)
		this.getPlanets = this.getPlanets.bind(this)
		this.getResidents = this.getResidents.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.addToFaves = this.addToFaves.bind(this)
		this.removeFromFaves = this.removeFromFaves.bind(this)
	}

	componentDidMount() {
		const people = fetch(`https://swapi.co/api/people/`).then(data => data.json())
		const planets = fetch(`https://swapi.co/api/planets/`).then(data => data.json())
		const vehicles = fetch(`https://swapi.co/api/vehicles/`).then(data => data.json())
		const films = fetch(`https://swapi.co/api/films/`).then(data => data.json())

		return Promise.all([people, planets, vehicles, films]).then(data => {
			const People = this.getHomeWorld(data[0].results).then(data => this.getSpecies(data))
			const Planets = this.getPlanets(data[1].results)

			return Promise.all([People, Planets, vehicles, films]).then(res => {
				return this.setState({ data: res })
			})
		})
		console.log(this.state.data)
	}

	getHomeWorld(dataResult) {
		const unresolvedHomeworlds = dataResult.map(person => {
			return fetch(person.homeworld).then(data => data.json())
		})

		return Promise.all(unresolvedHomeworlds).then(result =>
			result.map((homeworld, i) =>
				Object.assign(dataResult[i], {
					homeworld: homeworld.name,
					population: homeworld.population
				})
			)
		)
	}

	getSpecies(dataResult) {
		const unresolvedSpecies = dataResult.map(person => {
			return fetch(person.species).then(data => data.json())
		})

		return Promise.all(unresolvedSpecies).then(result =>
			result.map((species, i) =>
				Object.assign(dataResult[i], {
					species: species.name
				})
			)
		)
	}

	getPlanets(planetData) {
		const unresolvedPlanetArray = planetData.map(planet => {
			const planetResidentsNames = this.getResidents(planet.residents)
			return planetResidentsNames
		})

		return Promise.all(unresolvedPlanetArray).then(residentArray => {
			return residentArray.map((planetsResidentsArray, i) => {
				return Object.assign(
					planetData[i],
					{
						planet: planetData[i].name,
						terrain: planetData[i].terrain,
						population: planetData[i].population,
						climate: planetData[i].climate
					},
					{ residents: planetsResidentsArray }
				)
			})
		})
	}

	getResidents(planetResidentsUrls) {
		const unresolvedPlanetResidents = planetResidentsUrls.map(url => {
			return fetch(url).then(data => data.json())
		})

		return Promise.all(unresolvedPlanetResidents).then(data => {
			return data.map(resident => {
				return resident.name
			})
		})
	}

	handleClick(e) {
		this.setState({ display: e.target.title })
	}

	addToFaves(fullObj) {
		let faves = [...this.state.favoriteCards]

		if (faves.includes(fullObj)) {
			this.removeFromFaves(fullObj)
		} else {
			faves.push(fullObj)
			this.setState({ favoriteCards: faves, favesLength: true })
		}
	}

	removeFromFaves(fullObj) {
		let faves = [...this.state.favoriteCards]
		let filteredArray = faves.filter(obj => obj !== fullObj)
		this.setState({ favoriteCards: filteredArray })
	}

	render() {
		return (
			<div className="App">
				<Nav handleClick={this.handleClick} display={this.state.display} />
				{!this.state.data && <p>Loading...</p>}
				{this.state.data &&
					<CardContainer
						peopleArray={this.state.data[0]}
						planetArray={this.state.data[1]}
						vehicleArray={this.state.data[2].results}
						display={this.state.display}
						scrollData={this.state.data}
						addToFaves={this.addToFaves}
						favesArray={this.state.favoriteCards}
						favesLength={this.state.favesLength}
					/>}
			</div>
		)
	}
}
