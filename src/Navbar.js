import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className='navbar'>
        <div className='nav-container'>
      <Link className='nav-logo' exact='true' to='/movielist'>
        Movie and Tv Show Trends
        </Link>

        <ul className='nav-menu'>
        <li className='nav-item'>
      <Link className='nav-links' to='/weekly'>
        Weekly Trends
      </Link>
        </li>

        <li className='nav-item'>     
      <Link className='nav-links' to='/daily'>
        Daily Trends
        </Link>
        </li>
        </ul>
       
        </div>
      </nav>
  )
}

export default Navbar
