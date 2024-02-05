import React,{useState} from 'react'

const Index = () => {
    const [firstName,setFirstName] = useState('');
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const changeFirstName = (e) => {
       setFirstName(e.target.value)
    }
    const changeEmail = (e) => {
       setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let object = {
            firstName:firstName,
            email:email,
            password:password
        }
        console.log(object)
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
        <input type='text' name='firstName' id='firstName' value={firstName} onChange={changeFirstName} placeholder='Enter Your Name'/>
        </div>
        <div>
        <input type='email' name='email' id='email' onChange={changeEmail} value={email} placeholder='Enter Your Email'/>
        </div>
        <div>
        <input type='password' name='password' onChange={changePassword} value={password} id='password' placeholder='Enter Your Password'/>
        </div>
        <div>
        <button type='submit'> Submit </button>
        </div>
      
      
      
      
    </form>
  )
}

export default Index
