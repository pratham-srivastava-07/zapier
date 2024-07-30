"use client"

import axios from "axios";
import NormalButton from "../components/buttons/NormalButton";
import CheckFeature from "../components/CheckFeature";
import Input from "../components/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    return <div className="flex justify-center">
            <div className="flex pt-8 max-w-4xl">
            <div className="flex-1 pt-20 px-4">
                <div className="font-semibold text-4xl pb-3">
                Join millions worldwide who automate their work using Zapier.
                </div>
                <div className="pt-4">
                <CheckFeature label={"Easy setup, no coding required"} />
                </div>
               <div className="pt-4">
               <CheckFeature label={"Free forever for core features"} />
               </div>
               <div className="pt-4">
               <CheckFeature label={"14-day trial of premium features & apps"} />
               </div>    
            </div>

            <div className="flex-1 pt-12 pb-12 mt-12 px-4 border">
                <Input label="Email" type ={"email"} placeholder={"Your Email"} onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <Input label="Password" type ={"password"} placeholder={"Your Password"} onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <div className="pt-6">
                <NormalButton size="big" onClick={async()=> {
                     const res = await axios.post("http://localhost:3000/api/v1/user/signin", {
                        username: email,
                        password,
                      })
                      router.push("/dashboard");
                      localStorage.setItem("token", res.data.token)
                }}> Get Started Free</NormalButton>
                </div>
            </div>
        </div>
    </div>
}