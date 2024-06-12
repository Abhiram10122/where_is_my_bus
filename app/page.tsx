import Hero from "@/components/front_end/Hero";
import Home from "@/components/front_end/Home";
import Navbar from "@/components/front_end/Navbar";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />

      <Hero />
      <Link href="/bus">Go to Bus page</Link>
      <Home />
    </>
  );
};

export default page;
