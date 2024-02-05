import React from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

const LoginPage = () => {
    const navigate = useNavigate()
  return (
    <div className='login-page'>
        <h1>User Login</h1>
        <form>
            <div className='username'>
               <label className='username-text' htmlFor='username'>Username</label>
               <input className='user-input' type='text' id='username' placeholder='Enter Username'/>
            </div>
            <div className='password'>
               <label className='password-text'  htmlFor='password'>Password</label>
               <input className='user-input' type='password' id='password' placeholder='Enter User Password'/>
            </div>
            <div className='button'>
               <button onClick={() => navigate('/')}>Submit</button>
            </div>
            
            
        </form>
    </div>
  )
}

export default LoginPage
