import ChooseYourPlan from "@/components/pricing-page/ChooseYourPlan";
import PricingHero from "@/components/pricing-page/PricingHero";
import WhyUs from "@/components/pricing-page/WhyUs";
import React from "react";

const page = () => {
  return (
    <div>
      <PricingHero />
      <ChooseYourPlan />
      <WhyUs />
    </div>
  );
};

export default page;
