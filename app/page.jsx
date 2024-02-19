import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div> 
    <div  className="flex w-full">
      <Sidebar/>
      <Navbar/>
 </div>
  <Footer/>
  </div>
  );
}
