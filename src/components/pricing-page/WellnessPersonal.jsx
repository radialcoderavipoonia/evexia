import React from "react";
import CommonSection from "../common/CommonSection";

const WellnessPersonal = () => {
  return (
    <div className="pb-14 sm:pb-16 md:pb-20 lg:pb-[120px]">
      <CommonSection
        title="Let’s Make Wellness Personal"
        decoration="Your privacy is our priority. By providing your email, you’re taking the first step towards a healthier, more vibrant life, with the assurance that your information is protected"
        btnTitle="Start Transforming"
        imgSrc="/assets/images/pricing-page/wellness/wellness.png"
        shortDecoration="Thank you for believing in a personalized approach to health and wellness. Welcome to Evexia, where your DNA leads the way to a healthier you"
        bar="search"
      />
    </div>
  );
};

export default WellnessPersonal;
