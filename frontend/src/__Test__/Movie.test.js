import React from 'react';
import { render } from '@testing-library/react';
import Movie from '../components/Movie';
import {assertPropTypes} from 'check-prop-types'

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

it ('should display default decription', () => {
	 const  {queryByText} = render(<Movie movie = {movie} />)
	 expect(queryByText('Description not available')).not.toBeNull()
})

it ('should display a decription', () => {
	const description = 'What a cool movie'
	const  {queryByText} = render(<Movie movie = {movie} desc = {description}/>)
	 expect(queryByText(description)).not.toBeNull()

})

xit('should return type for a propype id ov type Integer', ()=> {  
    expect(assertPropTypes(Movie.propTypes, { id: 1 }, 'prop', Movie.id)).not.toThrow(); 
})

xit ('should return error fro a proptype id of type string', () => {
	expect(assertPropTypes(Movie.propTypes, { id: 'qa' }, 'prop', Movie.id)).toThrow(); 
})

xit('should return type for a propype title ov type String', ()=> { 
    expect(assertPropTypes(Movie.propTypes,movie, 'prop', Movie.movie.title)).not.toThrow(); 
})

xit ('should return error for a proptype title of type obkect', () => { 
	expect(assertPropTypes(Movie.propTypes.movie, movie, 'prop', Movie.movie.title)).toThrow(); 
})