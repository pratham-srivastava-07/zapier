import Image from "next/image";
import AppBar from "./components/AppBar";
import Hero from "./pages/Hero";
import HeroVideo from "./components/HeroVideo";

export default function Home() {
  return (
   <div>
    <AppBar/>
    <Hero />
    <HeroVideo/>
   </div>
  );
}
