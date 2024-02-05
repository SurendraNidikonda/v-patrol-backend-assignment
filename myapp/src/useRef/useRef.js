import React ,{useState,useRef,useEffect}from 'react'

const UseRef = () => {
    const [name,setName] = useState("")
    const renderCount = useRef(0)
    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })
  return (
    <div>
      <h1> Welcome to Use Ref</h1>
      
      <input type='text' name='name' id='name' value={name}  onChange={(e) => {setName(e.target.value)}}/>
      <h5 style={{color: 'red',fontSize:'12px'}}> Typing : {name}</h5>
      <h6> renderCount : {renderCount.current}</h6>
    </div>
  )
}

export default UseRef
