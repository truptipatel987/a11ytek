"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  FileCheck,
  Code,
  GraduationCap,
  FileText,
  Laptop,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Accessibility Audits",
    description:
      "Comprehensive testing using automated tools and manual testing with assistive technologies to identify barriers in your digital products.",
  },
  {
    icon: FileCheck,
    title: "WCAG Compliance",
    description:
      "Expert guidance to meet WCAG 2.1/2.2 AA and AAA standards. We help you understand and implement accessibility requirements effectively.",
  },
  {
    icon: Code,
    title: "Remediation Services",
    description:
      "Hands-on fixes for accessibility issues in your codebase. Our developers work alongside your team to implement lasting solutions.",
  },
  {
    icon: GraduationCap,
    title: "Training & Workshops",
    description:
      "Empower your team with accessibility knowledge and best practices through customized training sessions and interactive workshops.",
  },
  {
    icon: FileText,
    title: "VPAT Documentation",
    description:
      "Voluntary Product Accessibility Templates for government contracts and procurement. We help you document your accessibility conformance.",
  },
  {
    icon: Laptop,
    title: "Assistive Technology Testing",
    description:
      "Real-world testing with screen readers, voice control, switch devices, and other assistive technologies used by people with disabilities.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-muted/30"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4"
          >
            Our Accessibility Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions to help you create inclusive digital
            experiences that work for everyone.
          </p>
        </div>

        {/* Services grid */}
        <ul
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <li key={service.title}>
                <Card className="h-full hover-lift hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-primary">
                  <CardHeader>
                    <div
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                      aria-hidden="true"
                    >
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
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
