import React from 'react'
import NavBar from '../navBar'
import {useNavigate} from 'react-router-dom'
import './index.css'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='card'>
      <div className='logo-title'>
            <div>
                <img className='logo' src='https://res.cloudinary.com/daeetgsof/image/upload/v1684559090/red-heartbeat-symbol-graphic-illustration_53876-8061_qou6yf.avif' alt='logo'/>
            </div>
            <h1>HealthCare</h1>
            <h1>Home</h1>
            <button onClick={() => navigate('/login')}>Logout</button>

        </div>
      <NavBar/>
    </div>
  )
}

export default Home
