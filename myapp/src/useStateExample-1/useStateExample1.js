import React, {useState} from 'react'

const Index = () => {
    const [data,setData] = useState(false)
    const changeData = () => {
        setData(!data)
    }
    
  return (
    <div className='container'>
        <button onClick={changeData}>{data ? 'Hide' : 'Show'}</button>
      {/* {data && (
        <div>
            <h1> Hello Surendra</h1>
        </div>
      )} */}
      {data ? <div> Hello 

         </div> : <div>Bye </div>
         }
    </div>
  )
}

export default Index;


