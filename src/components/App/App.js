import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			data: null,
			input: 'people'
		};

		this.getHomeWorld = this.getHomeWorld.bind(this);
		this.getSpecies = this.getSpecies.bind(this);
	}

	componentDidMount() {
		const people = fetch(`https://swapi.co/api/people/`).then(data => data.json());
		const films = fetch(`https://swapi.co/api/films/`).then(data => data.json());
		const planets = fetch(`https://swapi.co/api/planets/`).then(data => data.json());
		const vehicles = fetch(`https://swapi.co/api/vehicles/`).then(data => data.json());

		return Promise.all([people, planets, vehicles, films])
			.then(data => {
				this.getHomeWorld(data[0].results)
				this.getSpecies(data[0].results)
				this.getPlanets(data[1].results)
				this.setState({ data: data })
			})
	}


	getHomeWorld(dataResult) {
		const unresolvedHomeworlds = dataResult.map(person => {
			return fetch(person.homeworld).then(data => data.json());
		});

		return Promise.all(unresolvedHomeworlds).then(result =>
			result.map((homeworld, i) =>
				Object.assign(dataResult[i], {
					homeworld: homeworld.name,
					population: homeworld.population
				})
			)
		);
	}

	getSpecies(dataResult) {
		const unresolvedSpecies = dataResult.map(person => {
			return fetch(person.species).then(data => data.json());
		});

		return Promise.all(unresolvedSpecies).then(result =>
			result.map((species, i) =>
				Object.assign(dataResult[i], {
					species: species.name,
				})
			)
		);
	}


  getPlanets(planetData) {
    const planetArray = planetData.map(planet => {
      const planetResidents = this.getResidents(planet.residents)
      return planetResidents
    })

    return Promise.all(planetArray)
      .then( data => {
        return data.map( (planetsResidentsArray, i) => {
          return Object.assign(planetData[i], { planet: planetData[i].name, terrain: planetData[i].terrain, population: planetData[i].population, climate: planetData[i].climate }, { residents: planetsResidentsArray })
        })
      })
  }

	getResidents(planetResidentsUrls) {
		const unresolvedPlanetResidents = planetResidentsUrls.map( url => {
			return fetch(url)
			.then(data => data.json())})

			return Promise.all(unresolvedPlanetResidents)
			.then(data => {
				return data.map( resident => {
					return resident.name
				})
			})
		}

	render() {
		return (
			<div className="App">
				{!this.state.data ? <p>Loading...</p> : <p>SWAPI-box</p>}
				{!this.state.data
					? <p>No Cards yet</p>
					: <CardContainer data={this.state.data} />}
			</div>
		);
	}
}
