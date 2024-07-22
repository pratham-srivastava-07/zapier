'use client'

import { useRouter } from "next/navigation";
import LinkButton from "./buttons/LinkButton";
import NormalButton from "./buttons/NormalButton";

export default function AppBar() {
    const router = useRouter()
    return <div className="flex border-b justify-between p-4">
        <div className="flex justify-center flex-col">
            Zapier
        </div>
        <div className="flex items-center">
            <LinkButton onClick={()=> {}}>Contact Sales</LinkButton>
            <LinkButton onClick={()=> router.push("/login")}>Login</LinkButton>
            <NormalButton onClick={() => router.push("/signup")}>Sign up</NormalButton>
        </div>
    </div>
}