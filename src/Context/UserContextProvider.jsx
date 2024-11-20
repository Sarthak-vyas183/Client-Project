/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import userContext from "./userContext";

const UserContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <userContext.Provider value={{darkMode, setDarkMode}}>
          {children}
        </userContext.Provider>
    )
}

export default UserContextProvider

