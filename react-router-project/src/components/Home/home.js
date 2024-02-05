import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../Context/authContext'

const Home = () => {
  const navigate = useNavigate()
  const data = useContext(AuthContext)
  console.log(data)

    return (
    <div>
      <h1>Home</h1>
      <h2>Welcome to Home Page Surendra 
        Nidikonda</h2>
      <button onClick={() => navigate('/success')}>Submit</button>
    </div>
  )
}

export default Home
