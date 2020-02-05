import React  from 'react';
import PropTypes from 'prop-types';

const  Movie = ({movie }) =>  
            <div>
		           <h1 className="Movie">{movie.title}</h1>
				    </div>
	
Movie.propTypes = { 
    movie: PropTypes.shape(	{	
    	title: PropTypes.string.isRequired
	   }).isRequired
	 }

export default Movie