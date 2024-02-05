import React from 'react'
import UsersData from './usersData'
import { Link } from 'react-router-dom'

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <div >
            {UsersData.map(each => {
                const {id,name,email} = each
                return (
                    <Link to={`/users/${id}`} key={id} >
                        <article style={{backgroundColor:'lightblue',margin:'20px'}}>
                        <h3>{name}</h3>
                        <h4>{email}</h4>
                        </article>
                      
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Users
