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
    features: [
      "Automated accessibility scanning",
      "Manual testing with screen readers",
      "Keyboard navigation testing",
      "Color contrast analysis",
      "Detailed remediation roadmap",
    ],
  },
  {
    icon: FileCheck,
    title: "WCAG Compliance",
    description:
      "Expert guidance to meet WCAG 2.1/2.2 AA and AAA standards. We help you understand and implement accessibility requirements effectively.",
    features: [
      "WCAG 2.1 & 2.2 compliance review",
      "ADA and Section 508 guidance",
      "Compliance gap analysis",
      "Remediation prioritization",
      "Compliance documentation",
    ],
  },
  {
    icon: Code,
    title: "Remediation Services",
    description:
      "Hands-on fixes for accessibility issues in your codebase. Our developers work alongside your team to implement lasting solutions.",
    features: [
      "Code-level accessibility fixes",
      "ARIA implementation",
      "Semantic HTML improvements",
      "Keyboard accessibility fixes",
      "Screen reader optimization",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Workshops",
    description:
      "Empower your team with accessibility knowledge and best practices through customized training sessions and interactive workshops.",
    features: [
      "Developer training programs",
      "Designer accessibility workshops",
      "Content accessibility training",
      "QA testing methodologies",
      "Custom curriculum development",
    ],
  },
  {
    icon: FileText,
    title: "VPAT Documentation",
    description:
      "Voluntary Product Accessibility Templates for government contracts and procurement. We help you document your accessibility conformance.",
    features: [
      "VPAT/ACR creation",
      "Section 508 documentation",
      "EN 301 549 compliance",
      "Government procurement support",
      "Conformance statement drafting",
    ],
  },
  {
    icon: Laptop,
    title: "Assistive Technology Testing",
    description:
      "Real-world testing with screen readers, voice control, switch devices, and other assistive technologies used by people with disabilities.",
    features: [
      "JAWS, NVDA, VoiceOver testing",
      "Dragon NaturallySpeaking testing",
      "Switch device testing",
      "Magnification software testing",
      "Real user testing sessions",
    ],
  },
];

export function ServicesPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Our Accessibility Services
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive solutions to help you create inclusive digital
            experiences that work for everyone. From audits to training, we&apos;ve
            got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="overflow-hidden">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <CardHeader className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 lg:p-12 bg-muted/30">
                    <h3 className="font-semibold text-foreground mb-4">What&apos;s Included:</h3>
                    <ul className="space-y-3" role="list">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <svg
                            className="h-5 w-5 text-primary shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
