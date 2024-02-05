import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'

const NavBar = () => {
    
  return (
    
        <div className='nav-links'>
          <NavLink className={'text'} to={'/newsfeed'}>NewsHome</NavLink>
          <NavLink className={'text'} to={'/shorts'}>Shorts</NavLink>
          <NavLink className={'text'} to={'/puzzles'}>Puzzles</NavLink>
          <NavLink className={'text'} to={'/cases'}>Cases</NavLink> 
        </div>
      
    
  )
}

export default NavBar
