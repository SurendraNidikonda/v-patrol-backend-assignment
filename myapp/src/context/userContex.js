import React from 'react'

const intilizeData = {
    firstname : "Surendra",
    lastname : "Nidikonda",
    age : 25
}

export const UserContext = React.createContext()

export const UserContextProvider = ({children}) => {
    return (
        <UserContext.Provider value={intilizeData}>{children}</UserContext.Provider>
    )
}
