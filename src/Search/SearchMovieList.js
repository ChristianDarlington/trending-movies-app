import React, {useState, useEffect} from 'react';
import SearchBox from './SearchBox';
import Navbar from '../Navbar';

const SearchMovieList = () => {

  const [movies, setMovies] = useState([])

  const [search, setSearch] = useState('')

  const getMovieRequest = async (search) => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=be8a4a3f`

    const response = await fetch(url)
    const responseJson = await response.json()

   
    if(responseJson.Search){
      setMovies(responseJson.Search)
    }

  }

useEffect(() => {
  getMovieRequest(search)
},[search])




console.log(movies)



  return (
    <>
    <Navbar />
    <SearchBox setSearch={setSearch} search={search}/>
    <div className=''>
    <div className="flex flex-wrap items-center justify-center">
  {movies && movies.length ? (
    movies.map((movie, index) => (
      <div className="p-10 m-10 text-center" key={index}>
        <img src={movie.Poster} alt="movie" className="w-full h-auto" />
      </div>
    ))
  ) : (
    <div className=''>
      <p className=''>No Movies</p>
    </div>
  )}
</div>
    </div>
    </>
    
  )
}

export default SearchMovieList