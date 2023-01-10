import React from "react";

const MovieList = ({movies}) => {

  console.log(movies)

  return (
    <>
    {movies.map((movie, index) => {
      return (
        <div key={movie.id} className='movie-container'>
          <div className="moviePoster">
          <img src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + movie.poster_path} alt='movie'></img>
          <h2>{movie.title || movie.name}</h2>
          <p>{movie.overview}</p>

          </div>
        </div>
        )
      })}
    </>
  )
}

export default MovieList
