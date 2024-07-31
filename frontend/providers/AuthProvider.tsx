import { useContext, useEffect, useState } from "react";
import { createContext } from "vm";

const AuthContext = createContext()


function AuthProvider({children}: {children: any}) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

   
}

export default function useAuth() {
    // return useContext(AuthContext)
}