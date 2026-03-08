import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PrivacyPolicyContent } from "@/components/PrivacyPolicyContent";

export const metadata = {
  title: "Privacy Policy | A11yTek - Accessibility Services",
  description: "Learn about how A11yTek collects, uses, and protects your personal information. Our privacy policy explains our data practices.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main id="main-content" role="main">
        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="privacy-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1
                id="privacy-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
              >
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
            </div>
            <PrivacyPolicyContent />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
