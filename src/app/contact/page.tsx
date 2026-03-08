import { Navigation } from "@/components/Navigation";
import { ContactPage } from "@/components/ContactPage";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Contact Us | A11yTek - Accessibility Services",
  description: "Get in touch with A11yTek for a free accessibility consultation. We're ready to help you create inclusive digital experiences.",
};

export default function Contact() {
  return (
    <>
      <Navigation />
      <main id="main-content" role="main">
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
