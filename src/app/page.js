import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OurBenefits from "@/components/OurBenefits";
import OurFeature from "@/components/OurFeature";
import PricingPlan from "@/components/PricingPlan";
import RevealYourUltimate from "@/components/RevealYourUltimate";
import Testimonial from "@/components/Testimonial";
import WhoWeAre from "@/components/WhoWeAre";
import Footer from "@/components/common/Footer";

const page = () => {
  return (
    <>
      <Hero />
      <RevealYourUltimate />
      <HowItWorks />
      <OurBenefits />
      <OurFeature />
      <Testimonial />
      <WhoWeAre />
      <PricingPlan />
      <Faq />
      <Footer />
    </>
  );
};

export default page;
