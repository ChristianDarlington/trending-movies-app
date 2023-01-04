import React from "react";

const MovieList = ({movies}) => {

  console.log(movies)

  return (
    <>
    {movies.map((movie, index) => {
        return (
          <img key={movie.id} className="moviePoster" src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + movie.poster_path} alt='movie'></img>
        )
    })}
    </>
  )
}

export default MovieList
