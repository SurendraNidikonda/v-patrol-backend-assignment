import React, { useContext } from 'react'
import { AuthContext } from '../../Context/authContext'
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const data = useContext(AuthContext)
    const {username} = data
    console.log(username)
    if (!username){
        return (<Navigate to={'/login'}/>)
    }

  return children;
}

export default PrivateRoute
