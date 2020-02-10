import React , {useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import Movie from './components/Movie'
import {getMovies} from './services/MovieServices'
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {
     const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
     const [isToggled, setIsToggled] = useState(false)
     const [movies, setMovies] = useState([])
     
	   useEffect( () => { 
         async function fetchMovies() {
		       const movies = await getMovies()
           setMovies( movies.results)
        }
        fetchMovies()
     },[] )
     
  return (
    <Router>
       <div className="App">
          <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Route path= '/test' component = {Test} /> 
          <button id = 'toggleButton' onClick = {() =>setIsToggled(!isToggled)} >Toggle</button>
          <Welcome />
          {isToggled && <h1 id = "tollgleText">This shold show and hide</h1>}
          {movies.map(movie =>  <Movie key = {movie.id} movie = {movie} />)}
       </div>
    </Router>
  );
}

export default App;

const Test = () => (
      <h1>TEST</h1>
)