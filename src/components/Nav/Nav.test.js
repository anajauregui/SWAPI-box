import React from 'react'
import Nav from './Nav'
import { shallow, mount } from 'enzyme'
import { mockFullData } from '../../Utils/MockData'

describe('Nav', () => {
	let wrapper
	let mockFn

	beforeEach(() => {
		mockFn = jest.fn()
		wrapper = shallow(<Nav handleClick={mockFn} display={'welcome'} data={mockFullData} />)
	})

	it('should render four buttons', () => {
		expect(wrapper.find('Button').length).toEqual(4)
	})

	it('should render a title', () => {
		expect(wrapper.find('h1').length).toEqual(1)
	})
})
