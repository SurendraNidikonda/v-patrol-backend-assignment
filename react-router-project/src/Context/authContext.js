import React, { useState } from 'react'

export const AuthContext = React.createContext()

export const AuthContextProvider = ({children}) => {
    const [username,setusername] = useState(null)
    const login = (username) => {
        setusername(username)
    }
    const logout = () => {
        setusername(null)
    }
    return ( <AuthContext.Provider value={{username,login,logout}}>
           {children}
    </AuthContext.Provider>
    )
}



