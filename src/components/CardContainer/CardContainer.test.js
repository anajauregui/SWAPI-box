import React from 'react'
import CardContainer from './CardContainer'
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

describe('CardContainer', () => {
	let wrapper
	let mockFn

	beforeEach(() => {
		mockFn = jest.fn()

		wrapper = shallow(
			<CardContainer
				peopleArray={mockPeopleArray}
				planetArray={mockPeopleArray}
				vehicleArray={mockVehicles}
				display={'welcome'}
				scrollData={mockScroll}
				addToFaves={mockFn}
				favesArray={mockPeopleArray}
			/>
		)
	})

	afterEach(() => {
		fetchMock.restore()
	})

	it('renders to the page when Data has been returned from API', () => {
		expect(wrapper.find('div.card-container').length).toEqual(1)
	})

	it('renders welcome scroll as soon as Data comes in from API', () => {
		expect(wrapper.find('section.star-wars').length).toEqual(1)
	})

	it('renders 10 cards when People, Planets, or Vehicles Button is clicked', () => {
		expect(wrapper.find('article.card').length).toEqual(10)
	})

	it('renders all Favorited cards when Favorite Button is clicked', () => {
		expect(wrapper.find('article.fav-card').length).toEqual(favesArray.length)
	})
})
