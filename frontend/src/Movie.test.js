import React from 'react';
import { render } from '@testing-library/react';
import Movie from './Movie';

const movie = { 
		id: 1,
		title: "Cool Movie"
	}

it ('should exist', () => { 
	
	expect(render(<Movie movie = {movie} />)).not.toBeNull()
})

it ('should display Cool Movie', () => { 
	const  {queryByText} = render(<Movie movie = {movie} />)
	expect(queryByText('Cool Movie')).not.toBeNull()
})