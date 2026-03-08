import { Navigation } from "@/components/Navigation";
import { TestimonialsPage } from "@/components/TestimonialsPage";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata = {
  title: "Client Testimonials | A11yTek - Accessibility Services",
  description: "Read what our clients say about our accessibility services. Hear from organizations we've helped on their accessibility journey.",
};

export default function Testimonials() {
  return (
    <>
      <Navigation />
      <main id="main-content" role="main">
        <TestimonialsPage />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
