import React , {useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Movie from './Movie'

const movies = [ 
  { id: 1,
    title: 'Star Wars'
  },
  { id: 2,
    title: 'Spider Man'
  },
  { id: 3,
    title: 'Scindlers List'
  },

]


function App() {
    
     const [isToggled, setIsToggled] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button id = 'toggleButton' onClick = {() =>setIsToggled(!isToggled)} >Toggle</button>
      <Welcome />
      {isToggled && <h1 id = "tollgleText">This shold show and hide</h1>}
      {movies.map(movie =>  <Movie key = {movie.id} movie = {movie} />)}
    </div>
  );
}



export default App;
