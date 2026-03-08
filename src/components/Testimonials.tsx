"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The accessibility audit transformed our approach to digital inclusion. Their comprehensive report and hands-on remediation support helped us achieve WCAG compliance while improving the overall user experience.",
    role: "Chief Technology Officer",
    industry: "Technology Company",
  },
  {
    quote:
      "The training workshop conducted for our development team was exceptional. Our engineers now have the knowledge and confidence to build accessibility into our products from the start.",
    role: "VP of Engineering",
    industry: "SaaS Platform",
  },
  {
    quote:
      "Working with their team on VPAT documentation was seamless. They understood the requirements and delivered thorough documentation that helped us secure government contracts.",
    role: "Director of Compliance",
    industry: "Government Solutions",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4"
          >
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from organizations we&apos;ve helped on their accessibility journey.
          </p>
        </div>

        {/* Testimonials grid */}
        <ul
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <Quote
                    className="h-8 w-8 text-primary/30 mb-4"
                    aria-hidden="true"
                  />
                  <blockquote className="text-muted-foreground leading-relaxed flex-1 mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <footer>
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
      </div>
    </section>
  );
}
