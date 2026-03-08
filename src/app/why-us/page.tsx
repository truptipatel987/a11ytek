import { Navigation } from "@/components/Navigation";
import { WhyUsPage } from "@/components/WhyUsPage";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata = {
  title: "Why Choose Us | A11yTek - Accessibility Services",
  description: "Discover why organizations choose A11yTek for their accessibility needs. Expert team, real-world testing, comprehensive reports, and ongoing support.",
};

export default function WhyUs() {
  return (
    <>
      <Navigation />
      <main id="main-content" role="main">
        <WhyUsPage />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
