import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OurBenefits from "@/components/OurBenefits";
import OurFeature from "@/components/OurFeature";
import PricingPlan from "@/components/PricingPlan";
import RevealYourUltimate from "@/components/RevealYourUltimate";
import Testimonial from "@/components/Testimonial";
import Transforming from "@/components/Transforming";
import WellnessJourney from "@/components/WellnessJourney";
import WhoWeAre from "@/components/WhoWeAre";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/common/Footer";

const page = () => {
  return (
    <>
      <Hero />
      <RevealYourUltimate />
      <HowItWorks />
      <WhyUs />
      <OurBenefits />
      <OurFeature />
      <Transforming />
      <Testimonial />
      <WellnessJourney />
      <WhoWeAre />
      <PricingPlan />
      <Faq />

      <Footer />
    </>
  );
};

export default page;
