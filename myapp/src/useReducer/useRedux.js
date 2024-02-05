import React ,{useReducer} from 'react'

const reducer = (state,action) => {
  if (action.type === 'delete_user') {
    const newUser = state.filter((eachItem) => {

      return eachItem.id !== action.payload
    })
    
    return newUser

  }
  
  

}
const  Final= () => {
  const intilizeData = [
    { id:1,
      firstname:"Surendra", 
      lastname:"Nidikonda",age:25
    },

    { id:2 , 
      firstname: "Suresh",
      lastname:"Lankapalli",
      age:25},

      
    
  ]
  const [state,dispatch] =  useReducer(reducer,intilizeData)
  const clickDelete = (id) => {
    dispatch({
      type:"delete_user",
      payload: id
    })
  }
  
  return (
    <div style={{textAlign: "center"}}>
      <h1> Welcome to React Reducer</h1>
      {state.map((eachItem) => {
        const {id,firstname,lastname,age} = eachItem
        return (
          <div key={id}> 
               <h1> firstname : {firstname}</h1>
               <h1> lastname : {lastname} </h1>
               <h1> age : {age} </h1>
               <button onClick={() => clickDelete(id)}>Delete</button>
            </div>
        )
      })}
    </div>
  )
}

export default Final
