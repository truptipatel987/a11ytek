"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To create a digital world where everyone, regardless of ability, can access, understand, and use technology effectively.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "We believe in inclusivity, integrity, and excellence. Every project we undertake is guided by a commitment to making technology accessible to all.",
  },
  {
    icon: Users,
    title: "Our Approach",
    description:
      "We partner with organizations to understand their unique needs and provide tailored solutions that create lasting accessibility improvements.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* About content */}
          <div>
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6"
            >
              About A11yTek
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A11yTek was founded with a simple but powerful vision: to make
                the digital world accessible to everyone. We believe that
                accessibility is not just a legal requirement—it&apos;s a fundamental
                aspect of good design and inclusive business practice.
              </p>
              <p>
                Our team of certified accessibility specialists brings together
                decades of combined experience in digital accessibility, user
                experience design, and software development. We&apos;ve helped
                organizations of all sizes—from startups to Fortune 500
                companies—create digital experiences that work for everyone.
              </p>
              <p>
                We don&apos;t just identify problems; we provide practical,
                actionable solutions that fit your organization&apos;s needs and
                resources. Our goal is to be your long-term partner in
                accessibility, helping you build and maintain inclusive digital
                products.
              </p>
            </div>
          </div>

          {/* Values cards */}
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
      </div>
    </section>
  );
}
