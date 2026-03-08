import { Navigation } from "@/components/Navigation";
import { ServicesPage } from "@/components/ServicesPage";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata = {
  title: "Our Services | A11yTek - Accessibility Services",
  description: "Comprehensive accessibility services including audits, WCAG compliance, remediation, training, VPAT documentation, and assistive technology testing.",
};

export default function Services() {
  return (
    <>
      <Navigation />
      <main id="main-content" role="main">
        <ServicesPage />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
