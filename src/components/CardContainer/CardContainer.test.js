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
