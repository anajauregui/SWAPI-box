import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock'
import {
	mockPeopleArray,
	mockHomeworld,
	mockSpecies,
	mockPlanetsArray,
	mockResidentsArray,
	mockFilms,
	mockVehicles
} from '../../Utils/MockData'

describe('App', () => {
	let wrapper

	beforeEach(() => {
		fetchMock.get('https://swapi.co/api/', {
			status: 200,
			body: mockPeopleArray
		})
		wrapper = shallow(<App />)
		console.log(wrapper)
	})

	afterEach(() => {
		fetchMock.restore()
	})

	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<App />, div)
	})

	it('has a default state', () => {
		expect(wrapper.state.data).toEqual(null)
		expect(wrapper.state.display).toEqual('welcome')
		expect(wrapper.state.favoriteCards).toEqual([])
	})

	it('changes state when data is retrieved from API', () => {})
})
