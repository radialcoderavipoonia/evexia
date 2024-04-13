import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OurBenefits from "@/components/OurBenefits";
import Image from "next/image";
import NavBar from "@/components/common/navBar/NavBar";
import React from "react";
import RevealYourUltimate from "@/components/RevealYourUltimate";

const page = () => {
  return (
    <>
      <Hero />
      <RevealYourUltimate />
      <HowItWorks />
      <OurBenefits />
      <NavBar />
    </>
  );
};

export default page;
