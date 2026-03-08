"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The accessibility audit transformed our approach to digital inclusion. Their comprehensive report and hands-on remediation support helped us achieve WCAG compliance while improving the overall user experience.",
    role: "Chief Technology Officer",
    industry: "Technology Company",
    rating: 5,
  },
  {
    quote:
      "The training workshop conducted for our development team was exceptional. Our engineers now have the knowledge and confidence to build accessibility into our products from the start.",
    role: "VP of Engineering",
    industry: "SaaS Platform",
    rating: 5,
  },
  {
    quote:
      "Working with their team on VPAT documentation was seamless. They understood the requirements and delivered thorough documentation that helped us secure government contracts.",
    role: "Director of Compliance",
    industry: "Government Solutions",
    rating: 5,
  },
  {
    quote:
      "We were facing an accessibility lawsuit and needed urgent help. Their team conducted a rapid audit and provided prioritized fixes that helped us resolve the issue quickly.",
    role: "General Counsel",
    industry: "E-commerce Platform",
    rating: 5,
  },
  {
    quote:
      "The ongoing support has been invaluable. They don't just fix issues—they teach your team how to prevent them. Our developers are now accessibility champions.",
    role: "Product Manager",
    industry: "Financial Services",
    rating: 5,
  },
  {
    quote:
      "Their real-user testing with assistive technologies revealed issues we never would have found on our own. The insights have made our product truly inclusive.",
    role: "UX Director",
    industry: "Healthcare Technology",
    rating: 5,
  },
];

export function TestimonialsPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Client Success Stories
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hear from organizations we&apos;ve helped on their accessibility journey.
            From startups to enterprise, we&apos;ve guided teams toward inclusive design.
          </p>
        </div>

        {/* Testimonials Grid */}
        <ul
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <Quote
                    className="h-8 w-8 text-primary/30 mb-4"
                    aria-hidden="true"
                  />
                  <blockquote className="text-muted-foreground leading-relaxed flex-1 mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <footer className="border-t pt-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.industry}
                    </p>
                  </footer>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Accessibility Journey?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Join the organizations that have transformed their digital products
            with our help. Get started with a free accessibility consultation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 px-6 py-2"
          >
            Get Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
