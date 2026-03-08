import { Navigation } from "@/components/Navigation";
import { AboutPage } from "@/components/AboutPage";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata = {
  title: "About Us | A11yTek - Accessibility Services",
  description: "Learn about A11yTek's mission to make the digital world accessible to everyone. Our team of certified accessibility specialists is committed to inclusive design.",
};

export default function About() {
  return (
    <>
      <Navigation />
      <main id="main-content" role="main">
        <AboutPage />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
