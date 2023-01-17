import React from 'react'
import MovieList from './MovieList'
import Navbar from './Navbar'
import {useState, useEffect} from 'react'

const Weekly = () => {

  const [movies, setMovies] = useState([])

 

  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch(API_KEY);
  //     const data = await response.json();
  //     setMovies(data.results);
  //   }
  //   getData();
  // },[])

   
  // console.log(movies)

  return (    
    <div>
      <Navbar />
      {/* <div className='movie-container'>
      {
        movies && movies.map((movie, index) => {
          return(
            <MovieList movie={movie} key={index}/>
            )
          })
        }
        </div> */}
    </div>
  )
}

export default Weekly
