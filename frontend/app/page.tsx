import Image from "next/image";
import AppBar from "./components/AppBar";
import Hero from "./pages/Hero";

export default function Home() {
  return (
   <div>
    <AppBar/>
    <Hero />
   </div>
  );
}
