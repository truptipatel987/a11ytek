"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  Users2,
  FileSearch,
  Handshake,
} from "lucide-react";

const differentiators = [
  {
    icon: Award,
    title: "Expert Team",
    description:
      "Our team includes certified accessibility specialists (CPACC, WAS) with deep expertise in WCAG, ADA, and Section 508 compliance.",
  },
  {
    icon: Users2,
    title: "Real-World Testing",
    description:
      "We conduct testing with actual assistive technology users, ensuring our findings reflect real-world experiences.",
  },
  {
    icon: FileSearch,
    title: "Comprehensive Reports",
    description:
      "Our detailed reports provide actionable findings with clear explanations, code examples, and prioritized recommendations.",
  },
  {
    icon: Handshake,
    title: "Ongoing Support",
    description:
      "We partner with you throughout your accessibility journey, providing guidance and support at every step.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-16 sm:py-20 lg:py-24 bg-muted/30"
      aria-labelledby="why-us-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2
            id="why-us-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4"
          >
            Why Choose A11yTek?
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine expertise, empathy, and practical solutions to help you
            achieve true digital accessibility.
          </p>
        </div>

        {/* Differentiators grid */}
        <ul
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {differentiators.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.title}>
                <Card className="h-full text-center hover-lift hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
