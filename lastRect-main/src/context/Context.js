import { createContext, useEffect, useState } from "react";
import jwtDecode from 'jwt-decode'
import { Navigate, useNavigate } from 'react-router-dom';

export const LoginContext=createContext(0)
export function LoginContextProvider({children}) {
   let [user,setUser]=useState(null)
   
   function decodeUser(){
    const token=localStorage.getItem('token')
    const userD=jwtDecode(token)
     setUser(userD)
     console.log(user)
   }
   function Logout() {
    localStorage.removeItem('token')
    setUser(null)
  
   }
   useEffect(()=>{
    if(localStorage.getItem('token'))
    {
        decodeUser()
    }
   },[])
   
    return <LoginContext.Provider  value={{decodeUser,user,Logout}}>
    {children}
    </LoginContext.Provider>
    
}