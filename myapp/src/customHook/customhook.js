import React,{useState} from 'react'


const Customhook = () => {
    const [count,setCount] = useState(0)

   const onIncreament = () => {
    setCount(count + 1)
   } 
   const onDecreament = () => {
    setCount(count-1)
   }
   const onRest = () => {
    setCount(0)
   }

  return (
    <div style={{textAlign: "center"}}>
      <h1>Welcome to custom hook</h1>
      <p>{count}</p>
      <div>
      <button onClick={onDecreament}>-</button>
      
      <button onClick={onIncreament}>+</button>
      <button onClick={onRest}>Reset</button>
      </div>
      
    </div>
  )
}

export default Customhook
