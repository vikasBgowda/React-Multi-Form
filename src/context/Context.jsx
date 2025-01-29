import React, { createContext, useContext, useState } from 'react'

export const ContextForm=createContext(null);

export const ContextProvider = ({children}) => {



    const [RegistersationFormDetails, setRegistersationFormDetails] = useState({
        name:'',
        email:'',
        password:''
    })



  return  <ContextForm.Provider value={{RegistersationFormDetails,setRegistersationFormDetails}}>
        {children}
    </ContextForm.Provider>
}
export default ContextProvider;