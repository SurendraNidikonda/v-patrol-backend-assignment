import './index.css'
import {NavLink} from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/authContext'


const Header= () => {
  const {username} = useContext(AuthContext)
  return (
    <div className='header' >
      <NavLink to={'/'} className='text' style={{paddingRight:'20px'}}>Home</NavLink>
      <NavLink to={'/about'} className='text' style={{paddingRight:'20px'}}>About</NavLink>
      <NavLink to={'/contact'} className='text' style={{paddingRight:'20px'}}>Contact</NavLink>
      <NavLink to={'/projects'} className='text' style={{paddingRight:'20px'}} >Projects</NavLink>
      <NavLink to={'/users'} className='text' style={{paddingRight:'20px'}} >Users</NavLink>
      { username ? <NavLink to={'/logout'} className='text' style={{paddingRight:'20px'}} >LogOut</NavLink> : <NavLink to={'/login'} className='text' style={{paddingRight:'20px'}} >LogIn</NavLink>}


    </div>
  )
}

export default Header
