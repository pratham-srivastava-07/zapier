'use client'
import { usePathname, useRouter } from "next/navigation";
import LinkButton from "./buttons/LinkButton";
import NormalButton from "./buttons/NormalButton";
import useAuth from "@/providers/AuthProvider";

export default function AppBar() {
    const router = useRouter()
    const path = usePathname()
    const {isAuthenticated} = useAuth();
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
            }
            {
                isAuthenticated && 
                <>
                <div>
                    <LinkButton onClick={()=> {}}>Logout</LinkButton>
                </div>
                
                </>
            }
        </div>
    </div>
}