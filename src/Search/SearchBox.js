import React from 'react'


const SearchBox = ({ search, setSearch }) => {

 ;


  return (
    <div className="flex items-center justify-center py-6 px-6 ">
      <input
        
        className="px-3 py-2 font-semibold rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500  focus:ring-2 text-black"
        placeholder="Type to search"
        value={search}
        onChange={event => setSearch(event.target.value)}
        id="search"
      ></input>
    </div> 
  )
}

export default SearchBox
