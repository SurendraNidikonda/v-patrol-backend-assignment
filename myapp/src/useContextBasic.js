import React , {useContext}from 'react'
import { UserContext } from './context/userContex'

const UserContextBasic = () => {
  const data = useContext(UserContext)
  const {firstname,lastname,age} = data
  return (
    <div>
      <h1> Welcome to React Contex basics</h1>
      <div>Firstname : {firstname}</div>
      <div>Lastname : {lastname}</div>
      <div>Age : {age}</div>
    </div>
  )
}

export default UserContextBasic