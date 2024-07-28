'use client'

import { useRouter } from "next/navigation";
import LinkButton from "./buttons/LinkButton";
import NormalButton from "./buttons/NormalButton";

export default function AppBar() {
    const router = useRouter()
    return <div className="flex border-b justify-between p-4">
        <div className="flex justify-center flex-col font-bold text-2xl ">
            Zapier
        </div>
        <div className="flex items-center space-x-2">
            <div className="">
              <LinkButton onClick={()=> {}}>Contact Sales</LinkButton>
            </div>
            <div className="">
              <LinkButton onClick={()=> router.push("/login")}>Login</LinkButton>
            </div>
            <NormalButton onClick={() => router.push("/signup")}>Sign up</NormalButton>
        </div>
    </div>
}