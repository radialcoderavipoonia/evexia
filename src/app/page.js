import HowItWorks from "@/components/HowItWorks";
import OurBenefits from "@/components/OurBenefits";
import Image from "next/image";
import NavBar from "@/components/common/navBar/NavBar";
import React from "react";

const page = () => {
  return (
    <>
      <HowItWorks />
      <OurBenefits />
      <NavBar />
    </>
  );
};

export default page;
