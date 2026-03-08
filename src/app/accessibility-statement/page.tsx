import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AccessibilityStatementContent } from "@/components/AccessibilityStatementContent";

export const metadata = {
  title: "Accessibility Statement | A11yTek - Accessibility Services",
  description: "A11yTek's commitment to digital accessibility. Learn about our accessibility features, conformance status, and how to report issues.",
};

export default function AccessibilityStatement() {
  return (
    <>
      <Navigation />
      <main id="main-content" role="main">
        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="accessibility-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1
                id="accessibility-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
              >
                Accessibility Statement
              </h1>
              <p className="text-lg text-muted-foreground">
                Our commitment to making the digital world accessible to everyone.
              </p>
            </div>
            <AccessibilityStatementContent />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
