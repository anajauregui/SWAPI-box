import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
export default class App extends Component {
	constructor() {
		super();

		this.state = {
			data: null
		};

		this.getSwapiData = this.getSwapiData.bind(this);
	}

	getSwapiData() {
		fetch(`https://swapi.co/api/people/`)
			.then(data => data.json())
			.then(result => this.cleanApi(result.results))
			.catch(console.log('something went wrong'));
	}

	cleanApi(results) {
		this.setState({
			data: results
		});
	}

	componentWillMount() {
		this.getSwapiData();
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
