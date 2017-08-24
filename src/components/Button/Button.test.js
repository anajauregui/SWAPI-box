import React from 'react'
import Button from './Button'
import { shallow, mount } from 'enzyme'

describe('Button Component', () => {
	let wrapper
	let mockFn
	let title = 'Favorites'
	let display = 'welcome'

	beforeEach(() => {
		mockFn = jest.fn()
		wrapper = shallow(<Button title={title} handleClick={mockFn} display={display} />)
	})

	it('should display a button', () => {
		expect(wrapper.find('button').length).toEqual(1)
	})

	it('should fire a function on click', () => {
		let button = wrapper.find('button')
		expect(mockFn).toHaveBeenFired(0)

		button.simulate('click')

		expect(mockFn).toHaveBeenFired(1)
	})

	it('should render the title', () => {
		let button = wrapper.find('button')
		expect(button.node.props.title).toEqual('Favorites')
	})
})
