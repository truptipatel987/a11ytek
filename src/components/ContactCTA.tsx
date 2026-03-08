import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Ready to Start Your Accessibility Journey?
        </h2>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Get a free accessibility consultation and discover how we can help
          you create inclusive digital experiences.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="bg-white text-primary hover:bg-white/90"
        >
          <Link href="/contact">
            Get Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
