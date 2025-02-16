"use client";
import Image from "next/image";
import Navbar from "@/components/front_end/Navbar";
import { Signup } from "@/components/front_end/Signup";
export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen md:hidden">
      <Navbar />
      <div className="flex flex-col items-start mt-[4rem] p-[1.5rem] ">
        <p className=" font-semibold text-[#919191] text-xl">
          Let{"'"}s Get Started!
        </p>
        <p className="text-[#3D408A] text-5xl font-semibold">Sign Up</p>
        <div className="p-2 pt-[2rem] w-full flex items-center justify-center z-20">
          <Signup />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <Image
            src={"/Ellipse.svg"}
            alt={"Ellipse"}
            width={767}
            height={10}
          />
        </div>
        {/* <button type="button" className="h-auto cursor-pointer" onClick={()=>console.log('CLicked')}>sendotp</button> */}
      </div>
    </div>
  );
}
