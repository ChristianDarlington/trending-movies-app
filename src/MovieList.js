import React from "react";

const MovieList = ({movie}) => {

  console.log(movie)

  return (
    <>
        <div key={movie.id} className='movie'>
          <img src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + movie.poster_path} alt='movie'></img>
          <h2 className="title">{movie.title || movie.name}</h2> 
          <p className="info">{movie.overview}</p>
          </div>
       
    </>
  )
}

export default MovieList
