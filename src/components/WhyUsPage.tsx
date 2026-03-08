"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  Users2,
  FileSearch,
  Handshake,
  CheckCircle2,
  Shield,
  Zap,
  HeartHandshake,
} from "lucide-react";

const differentiators = [
  {
    icon: Award,
    title: "Certified Expertise",
    description:
      "Our team includes certified accessibility specialists (CPACC, WAS) with deep expertise in WCAG, ADA, and Section 508 compliance. We stay current with evolving standards and best practices.",
  },
  {
    icon: Users2,
    title: "Real-World Testing",
    description:
      "We conduct testing with actual assistive technology users, ensuring our findings reflect real-world experiences. This includes screen readers, voice control, switch devices, and more.",
  },
  {
    icon: FileSearch,
    title: "Comprehensive Reports",
    description:
      "Our detailed reports provide actionable findings with clear explanations, code examples, and prioritized recommendations. You'll know exactly what to fix and how to fix it.",
  },
  {
    icon: Handshake,
    title: "Ongoing Partnership",
    description:
      "We don't just deliver a report and walk away. We partner with you throughout your accessibility journey, providing guidance, training, and support at every step.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Reduce Legal Risk",
    description:
      "Avoid costly lawsuits and complaints by ensuring your digital products meet accessibility standards and regulations.",
  },
  {
    icon: Zap,
    title: "Improve User Experience",
    description:
      "Accessibility improvements benefit all users, leading to better usability, increased engagement, and higher customer satisfaction.",
  },
  {
    icon: CheckCircle2,
    title: "Expand Your Audience",
    description:
      "Reach the 1+ billion people worldwide who live with disabilities. Tap into a market with significant purchasing power.",
  },
  {
    icon: HeartHandshake,
    title: "Demonstrate Inclusion",
    description:
      "Show your commitment to diversity, equity, and inclusion. Build trust with customers who value socially responsible businesses.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your products, users, and accessibility goals through in-depth consultation.",
  },
  {
    step: "02",
    title: "Assessment",
    description: "Our team conducts thorough accessibility audits using automated tools and manual testing.",
  },
  {
    step: "03",
    title: "Reporting",
    description: "You receive detailed findings with prioritized recommendations and clear remediation paths.",
  },
  {
    step: "04",
    title: "Remediation",
    description: "We work with your team to implement fixes and provide training for sustainable accessibility.",
  },
  {
    step: "05",
    title: "Verification",
    description: "Post-remediation testing ensures issues are resolved and your product meets compliance standards.",
  },
  {
    step: "06",
    title: "Support",
    description: "Ongoing guidance and support as you continue your accessibility journey.",
  },
];

export function WhyUsPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="why-us-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1
            id="why-us-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Why Choose A11yTek?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We combine expertise, empathy, and practical solutions to help you
            achieve true digital accessibility. Here&apos;s what sets us apart.
          </p>
        </div>

        {/* Differentiators */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            What Sets Us Apart
          </h2>
          <ul
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            role="list"
          >
            {differentiators.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.title}>
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
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

        {/* Benefits */}
        <div className="mb-20 bg-muted/30 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            The Business Case for Accessibility
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {benefits.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.title}>
                  <div className="text-center">
                    <div
                      className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Process */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Our Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item) => (
              <Card key={item.step} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-primary/10 absolute top-4 right-4" aria-hidden="true">
                    {item.step}
                  </div>
                  <div className="relative">
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
