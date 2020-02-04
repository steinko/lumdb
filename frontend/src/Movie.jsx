import React ,{Component} from 'react';
class Movie extends Component {
	render () { 
		return<h1 className="Movie">{this.props.movie.title}</h1>
	}
}
export default Movie