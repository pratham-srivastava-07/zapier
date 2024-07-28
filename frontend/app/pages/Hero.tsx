'use client'
import NormalButton from "../components/buttons/NormalButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import { Feature } from "../components/Feature";
import {useRouter} from "next/navigation"

export default function Hero() {
    const router = useRouter()
    return <div>
       <div className="flex justify-center">
        <div className="font-semibold text-5xl text-center pt-8 max-w-lg">
            Automate as fast as you can type
            </div>
       </div>
       <div className="flex justify-center">
        <div className="font-normal text-xl text-center pt-8 max-w-3xl">
        AI gives you automation superpowers, and Zapier puts them to work. Pairing AI and Zapier helps you turn ideas into workflows and bots that work for you.
            </div>
       </div>
       <div className="flex justify-center pt-4 space-x-3">
            <NormalButton size="big" onClick={()=> router.push("/signup")}>Get Started Free</NormalButton>
            <SecondaryButton onClick={() => {}}>Start free with Google</SecondaryButton>
       </div>
      <div className="flex justify-center pt-5">
      <Feature title={"Free Forever"} subtitle={"For core features"} />
      <Feature title={"More apps"} subtitle={"Than any other platform"} />
      <Feature title={"Cutting edge"} subtitle={"AI Features"} />
      </div>
    </div>
}