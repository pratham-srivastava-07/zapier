"use client"

import { ReactNode, useContext, useEffect, useState,createContext } from "react";
import {  } from "vm";

const AuthContext = createContext({
    isAuthenticated: false, 
    setIsAuthenticated: (value: boolean) => {} 
})


function AuthProvider({children}: {children: ReactNode}) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    
    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token) {
            setIsAuthenticated(true)
        }
    }, [])
   return <div>
       <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>{children}</AuthContext.Provider>
   </div>
}

export default function useAuth() {
    return useContext(AuthContext)
}

export {AuthProvider}