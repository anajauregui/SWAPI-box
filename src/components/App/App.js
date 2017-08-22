import React, { Component } from 'react';
// import RetrieveData from '../../utils/helper'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      data: this.getSwapiData(),
      displayedCards: []
    }

    // this.getSwapiData = this.getSwapiData.bind(this)
    // this.scrubData = this.scrubData.bind(this)
    this.getSwapiData = this.getSwapiData.bind(this)
  }

getSwapiData() {
  const people = fetch(`https://swapi.co/api/people`).then(data => data.json())
  const planets = fetch(`https://swapi.co/api/planets`).then(data => data.json())
  const vehicles = fetch(`https://swapi.co/api/vehicles`).then(data => data.json())
  const films = fetch(`https://swapi.co/api/films`).then(data => data.json())

  return new Promise((resolve, reject) => {
    Promise.all([people, planets, vehicles, films]).then(result => {
      this.setState({
        data: result
      }, console.log(result))
      resolve();
    })
    .catch(e => {reject(e)})
  })
}

  // getSwapiData() {
  //   fetch(`https://swapi.co/api/people`)
  //     .then(data => data.json())
  //     .then(result => this.scrubData(result))
  // }

  // scrubData(data) {
  //   this.setState({
  //     data: data
  //   })
  // }

  // componentDidMount() {
  //   this.getSwapiData();
  // }

  render() {

    return (
      <div className="App">
        {
          (!this.state.data) ? <p>Loading...</p> : <p>SWAPI-box</p>
        }
      </div>
    );
  }
}
