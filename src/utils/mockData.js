export const mockFullData = [
	[
		{
			name: 'Luke Skywalker',
			homeworld: 'Tatooine',
			species: 'Human'
		}
	],
	[
		{
			name: 'Alderaan',
			climate: 'temperate',
			terrain: 'grasslands, mountains',
			population: '2000000000',
			residents: ['Your Mom', 'My Butt']
		}
	],
	{
		results: [
			{
				name: 'Sand Crawler',
				model: 'Digger Crawler',
				crew: '46',
				passengers: '30',
				vehicle_class: 'wheeled'
			}
		]
	},
	{
		results: [
			{
				title: 'A New Hope',
				episode_id: 4,
				opening_crawl: 'string',
				release_date: '1977-05-25'
			}
		]
	}
]

export const mockScroll = {
	results: [
		{
			title: 'A New Hope',
			episode_id: 4,
			opening_crawl: 'STAR WARS IS NOT THAT COOL',
			release_date: '1977-05-25'
		}
	]
}

export const mockPeopleArray = {
	results: [
		{
			name: 'Luke Skywalker',
			homeworld: 'http://swapi.co/api/planets/1/',
			species: 'http://swapi.co/api/species/1/'
		}
	]
}

export const mockPlanetArray = {
	results: [
		{
			name: 'Alderaan',
			climate: 'temperate',
			terrain: 'grasslands, mountains',
			population: '2000000000',
			residents: ['http://swapi.co/api/people/1/']
		}
	]
}

export const mockVehicleArray = {
	results: [
		{
			name: 'Sand Crawler',
			model: 'Digger Crawler',
			crew: '46',
			passengers: '30',
			vehicle_class: 'wheeled'
		}
	]
}

export const mockHomeworld = {
	name: 'Tatooine',
	climate: 'arid',
	terrain: 'desert',
	population: '200000',
	residents: ['http://swapi.co/api/people/1/']
}

export const mockSpecies = {
	name: 'Human'
}

export const mockPerson = [
	{
		name: 'Luke Skywalker',
		homeworld: 'http://swapi.co/api/planets/1/',
		species: ['http://swapi.co/api/species/1/']
	}
]

export const mockResidentsArray = ['Leia Organa', 'Bail Prestor Organa', 'Raymus Antilles']
