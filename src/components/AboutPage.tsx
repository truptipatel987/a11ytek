"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Users, Award, Clock, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To create a digital world where everyone, regardless of ability, can access, understand, and use technology effectively. We believe accessibility is a fundamental right, not an afterthought.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "We believe in inclusivity, integrity, and excellence. Every project we undertake is guided by a commitment to making technology accessible to all users, regardless of their abilities.",
  },
  {
    icon: Users,
    title: "Our Approach",
    description:
      "We partner with organizations to understand their unique needs and provide tailored solutions that create lasting accessibility improvements. We don't just find problems—we solve them.",
  },
];

const stats = [
  { icon: Award, value: "CPACC & WAS", label: "Certified Specialists" },
  { icon: Clock, value: "15+", label: "Years Combined Experience" },
  { icon: Globe, value: "Worldwide", label: "Remote Services" },
];

export function AboutPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            About A11yTek
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We&apos;re on a mission to make the digital world accessible to everyone.
            Learn about our story, values, and commitment to inclusive design.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A11yTek was founded with a simple but powerful vision: to make the
              digital world accessible to everyone. We believe that accessibility
              is not just a legal requirement—it&apos;s a fundamental aspect of good
              design and inclusive business practice.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team of certified accessibility specialists brings together decades
              of combined experience in digital accessibility, user experience design,
              and software development. We&apos;ve helped organizations of all sizes—from
              startups to Fortune 500 companies—create digital experiences that work
              for everyone.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We don&apos;t just identify problems; we provide practical, actionable
              solutions that fit your organization&apos;s needs and resources. Our goal
              is to be your long-term partner in accessibility, helping you build
              and maintain inclusive digital products.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.label} className="text-center">
                <CardContent className="p-6">
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values Cards */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            What Drives Us
          </h2>
          <ul className="space-y-6" role="list">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <li key={value.title}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div
                          className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0"
                          aria-hidden="true"
                        >
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-foreground mb-2">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Commitment Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-primary/5 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
            Our Commitment to Accessibility
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            We practice what we preach. Our own website and digital tools are built
            with accessibility at the forefront. We continuously test with assistive
            technologies and incorporate feedback from users with disabilities to
            improve our services and deliverables.
          </p>
        </div>
      </div>
    </section>
  );
}
