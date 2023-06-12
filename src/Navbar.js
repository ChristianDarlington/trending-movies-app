import React from 'react'
import {Link} from 'react-router-dom'



const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
      <Link className='nav-logo' path='/' exact='true' to='/'>
        Movie and TV Show Trends
        </Link>

        <ul className='nav-menu'>
        <li className='nav-item'>
      <Link className='nav-links' to='/daily'>
        Daily TV Show Trends
      </Link>
        </li>

        <li className='nav-item'>     
      <Link className='nav-links' to='/weekly'>
      Weekly Movie Trends
        </Link>
        </li>
        <li className='nav-item'>     
      <Link className='nav-links' to='/search'>
      Search For Movie & Shows
        </Link>
        </li>
        </ul>
       
        </div>
      </nav>

      {/* <Routes>
        <Route exact path='/' element={<MovieList />}/>
        <Route path='/weekly' element={<Weekly />}/>
        <Route path='/daily' element={<Daily />}/>
      </Routes> */}
    </>
  )
}

export default Navbar
