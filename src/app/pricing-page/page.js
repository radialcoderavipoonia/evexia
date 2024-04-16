import Footer from "@/components/common/Footer";
import ChooseYourPlan from "@/components/pricing-page/ChooseYourPlan";
import PricingHero from "@/components/pricing-page/PricingHero";
import WellnessPersonal from "@/components/pricing-page/WellnessPersonal";
import WhyUs from "@/components/pricing-page/WhyUs";
import React from "react";

const page = () => {
  return (
    <div className="overflow-hidden">
      <PricingHero />
      <ChooseYourPlan />
      <WhyUs />
      <WellnessPersonal />
      <Footer />
    </div>
  );
};

export default page;
