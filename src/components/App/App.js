import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import MovieScroll from '../MovieScroll/MovieScroll';

import Button from '../Button/Button'


export default class App extends Component {
	constructor() {
		super();

		this.state = {
			data: null,
			display: null
		};

		this.getHomeWorld = this.getHomeWorld.bind(this);
		this.getSpecies = this.getSpecies.bind(this);
		this.getPlanets = this.getPlanets.bind(this);
		this.getResidents = this.getResidents.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		const people = fetch(`https://swapi.co/api/people/`).then(data => data.json());
		const planets = fetch(`https://swapi.co/api/planets/`).then(data => data.json());
		const vehicles = fetch(`https://swapi.co/api/vehicles/`).then(data => data.json());
		const films = fetch(`https://swapi.co/api/films/`).then(data => data.json());

		return Promise.all([people, planets, vehicles, films])
			.then(data =>{
				const People = this.getHomeWorld(data[0].results).then(data => this.getSpecies(data))
				const Planets = this.getPlanets(data[1].results)

				return Promise.all([People, Planets, vehicles, films])
					.then(res => {
						return this.setState({ data: res })
					})
			})
      console.log(this.state.data);
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

	handleClick(e) {
		this.setState({ display: e.target.title});
	}

	render() {
    console.log(this.state.data);
		return (
			<div className="App">
        {this.state.data ? <MovieScroll  data={this.state.data}/> : null}
				{!this.state.data ? <p>Loading...</p> : <p>SWAPI-box</p>}
				<Button title='People' handleClick={this.handleClick.bind(this)} />
				<Button title='Planets' handleClick={this.handleClick.bind(this)} />
				<Button title='Vehicles' handleClick={this.handleClick.bind(this)} />
				{!this.state.data
					? <p>No Cards yet</p>
					: <CardContainer peopleArray={this.state.data[0]} />}
			</div>
		);
	}
}
