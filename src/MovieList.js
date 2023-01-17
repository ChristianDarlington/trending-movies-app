import React from "react";

const MovieList = ({movie}) => {

  return (
    <>
         <div key={movie.id} className='movie'>
           {movie.poster_path ? <img src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + movie.poster_path} alt='movie'></img> : <p>Loading...</p>}
          {movie.title || movie.name ?<h2 className="title">{movie.title || movie.name}</h2> : <p>Loading....</p>} 
          {movie.overview ? <p className="info">{movie.overview}</p> : <p>Loading....</p>}
          </div> 
    </>
  )
}

export default MovieList
