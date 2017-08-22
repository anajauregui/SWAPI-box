import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			data: null,
      input: 'people'
		};

		this.getSwapiData = this.getSwapiData.bind(this);
	}


  componentDidMount() {
    fetch(`https://swapi.co/api/people`)
      .then(data => data.json())
      .then(result => this.getSwapiData(result.results))
      .then(result => this.setState({
        data: result
      }))
  }

  getSwapiData(dataResult) {
    console.log(dataResult);
    const unresolvedHomeworlds = dataResult.map((person) => {
      return fetch(person.homeworld).then(data => data.json())
    })
    const unresolvedSpecies = dataResult.map((person) => {
      return fetch(person.species).then(data => data.json())
    })

    return Promise.all(unresolvedHomeworlds)
                                      .then(result => result.map((homeworld, i) =>
                                         Object.assign({}, dataResult[i],  { homeworld: homeworld.name, population: homeworld.population } )))
    }

	render() {
    console.log(this.state.data);
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
