'use client'

import { usePathname, useRouter } from "next/navigation";
import LinkButton from "./buttons/LinkButton";
import NormalButton from "./buttons/NormalButton";
import useAuth from "@/providers/AuthProvider";
import { useTheme } from "@/providers/ThemeProvider";
import DarkButton from "./buttons/DarkButton";

export default function AppBar() {
    const router = useRouter()
    const path = usePathname()
    let {isAuthenticated, setIsAuthenticated} = useAuth();
    const {theme, toggleTheme}= useTheme();

    const handleLogout = () => {
        localStorage.removeItem("token")
        setIsAuthenticated(false);        
        router.push("/");
    }

    return <div className="flex border-b justify-between p-4">
        <div className="flex justify-center flex-col font-bold text-2xl ">
            Zapier
        </div>
        <div className="flex items-center space-x-2">
            <div className="">
              <LinkButton onClick={()=> {}}>Contact Sales</LinkButton>
            </div>
            {!isAuthenticated && path !== '/dashboard' && (
             <>
              <div className="">
              <LinkButton onClick={()=> router.push("/login")}>Login</LinkButton>
            </div>
            <NormalButton onClick={() => router.push("/signup")}>Sign up</NormalButton>
             </>
            )
         } {
                isAuthenticated && 
                <>
                <div>
                    <LinkButton onClick={handleLogout}>Logout</LinkButton>
                </div>
                </>
            }
        <div>
            <DarkButton onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</DarkButton>
        </div>
        </div>
        
    </div>
}