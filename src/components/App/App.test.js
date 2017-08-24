import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock'
import {
	mockFullData,
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
	let mounted

	beforeEach(() => {
		fetchMock.get('https://swapi.co/api/', {
			status: 200,
			body: mockFullData
		})

		fetchMock.get('https://swapi.co/api/people', {
			status: 200,
			body: mockPeopleArray
		})

		fetchMock.get('https://swapi.co/api/planets', {
			status: 200,
			body: mockPeopleArray
		})

		fetchMock.get('https://swapi.co/api/vehicles', {
			status: 200,
			body: mockPeopleArray
		})

		fetchMock.get('https://swapi.co/api/films', {
			status: 200,
			body: mockPeopleArray
		})

		wrapper = shallow(<App />)
	})

	afterEach(() => {
		fetchMock.restore()
	})

	it('renders to the page', () => {
		expect(wrapper.find('div.App').length).toEqual(1)
	})

	it('renders a loading screen before data is retrieved from API', () => {
		expect(wrapper.find('div.loading').length).toEqual(1)
	})

	it('has a default state', () => {
		expect(wrapper.state().data).toEqual(null)
		expect(wrapper.state().display).toEqual('welcome')
		expect(wrapper.state().favoriteCards).toEqual([])
	})

	it('changes state when data is retrieved from API', () => {
		mounted = mount(<App />)
		expect(mounted.state().data).toEqual(mockFullData)
		expect(mounted.state().display).toEqual('welcome')
		expect(mounted.state().favoriteCards).toEqual([])
	})

	it('displays a CardContainer componenet when data is retrieved from API', () => {
		expect(mounted.state().display).toEqual('welcome')
		expect(mounted.find('CardContainer').length).toEqual(1)
	})

	it('displays an error if API fails to return data', () => {
		expect(wrapper.state().errorStatus).toEqual(null)
		fetchMock.get('https://swapi.co/api/', {
			status: 500,
			body: null
		})
		mounted = mount(<App />)
		expect(mounted.state().errorStatus).toEqual('THS IS NOT THE DATA YOU ARE LOOKING FOR')
	})
})
