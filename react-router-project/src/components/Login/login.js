import React, { useContext, useState } from 'react'
import './index.css'
import { AuthContext } from '../../Context/authContext'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [name,setName] = useState('')
    const data = useContext(AuthContext)
    const {login} = data
    const navigate = useNavigate()
    
    
  return (
    <div className='login'>
       <label>User Login </label>
       <input type='text' id='username' name='username' value={name} onChange={(event) => setName(event.target.value)} placeholder='Enter username'/>
       <button onClick={() => { login(name); navigate('/' , {replace:true});}} >Login</button>
    </div>
  )
}
export default Login
