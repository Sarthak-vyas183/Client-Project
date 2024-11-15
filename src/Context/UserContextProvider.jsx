import React, { useState } from "react";
import userContext from "./userContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState('sarthak vyas')
    return (
        <userContext.Provider value={{user, setUser}}>
          {children}
        </userContext.Provider>
    )
}

export default UserContextProvider

