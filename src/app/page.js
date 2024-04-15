import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OurBenefits from "@/components/OurBenefits";
import Image from "next/image";
import NavBar from "@/components/common/navBar/NavBar";
import React from "react";
import RevealYourUltimate from "@/components/RevealYourUltimate";
import WhoWeAre from "@/components/WhoWeAre";
import Faq from "@/components/Faq";

const page = () => {
  return (
    <>
      <Hero />
      <RevealYourUltimate />
      <HowItWorks />
      <OurBenefits />
      <WhoWeAre />
      <Faq />
    </>
  );
};

export default page;
