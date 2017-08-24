import React from 'react'
import MovieScroll from './MovieScroll'
import { shallow, mount } from 'enzyme'
import { mockFullData } from '../../Utils/MockData'

describe('MovieScroll', () => {
	let wrapper
	let scrollData

	beforeEach(() => {
		wrapper = shallow(<MovieScroll scrollData={mockFullData} />)
	})

	it('render a section with a className of star-wars', () => {
		expect(wrapper.find('section.star-wars').length).toEqual(1)
	})
})
