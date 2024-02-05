import React,{useState , useEffect} from 'react'

const UseEffectExample1 = () => {

    const [userData,setUserData] = useState([])
    const [loading,setLoading] = useState(false)
    const [isError,setIsError] = useState({status:false,msg:""})
    const URL = "https://jsonplaceholder.typicode.com/users";

    const fetchingUsersData = async (url) => {
        setLoading(true)
        try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setUserData(data)
        setLoading(false)
        setIsError({status:false,msg:""})
        if (response.status === 404){
             throw new Error('data was not found')
        }
            
        } catch (error) {
            setLoading(false)
            setIsError({status:true,msg: error.message || "something went wrong please try again"})

            
        }
        
    }

    useEffect(() => {
        fetchingUsersData(URL)

        
    },[])

    if (loading){
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }

    
    if (isError.status){
        return (
            <div>
                <h1 style={{color:'red'}}>{isError.msg}</h1>
            </div>
        )
    }
    console.log(isError.status)
    
    
  return (
    <div>
      <h1> UseEffect Example 1</h1>

      <ul>
        {userData.map((eachItem) => {
            const {id,name,email} = eachItem
            
            return (
                <li key={id}>
                    <div>{name}</div>
                    <div>{email}</div>
                </li>
                
            )
        })}
      </ul>
    </div>
  )
}

export default UseEffectExample1
