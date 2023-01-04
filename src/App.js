import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './MovieList';
import Navbar from './Navbar';

const API_KEY = `https://api.themoviedb.org/3/trending/all/day?api_key=7432733ca0b97edebd21bdd62d35ddd5`

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(API_KEY)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  },[])

    

  return (
    <div className="App">
      <Navbar />
     <MovieList movies={movies}/>
    </div>
  );
}

export default App;
