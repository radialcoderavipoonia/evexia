import React from "react";
import CommonSection from "./common/CommonSection";

const WellnessJourney = () => {
  return (
    <div className="lg:pt-[120px] sm:pt-24 pt-20">
      <CommonSection
        bar="button"
        title="Last Chance: Embrace Your Genetic Destiny"
        decoration="The clock is ticking on a once-in-a-lifetime chance to tailor your health to your DNA. Transform your fitness, nourish your mind, and elevate your well-being"
        btnTitle="Unlock My Wellness Journey"
        imgSrc="/assets/images/wellness-journey/journey.png"
        shortDecoration="Time’s running out! Be among the trailblazers redefining health with Evexia. Start your personalized wellness revolution today"
      />
    </div>
  );
};

export default WellnessJourney;
