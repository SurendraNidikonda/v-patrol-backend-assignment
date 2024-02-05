import React from 'react'
import {useParams} from 'react-router-dom'
import UsersData from './usersData'

const UserDetails = () => {
    const {userid} = useParams()
    console.log(userid)
    
    const userData = UsersData.find((eachUser) => 
        eachUser.id == userid
    )
    console.log(userData)
    
  return (
    <div>
       <h1>User Details</h1>
       {
        <div>
           <h1>{userData.name}</h1>  
           <h2>{userData.email}</h2>
        </div>
}
       
    </div>
  )
}

export default UserDetails
