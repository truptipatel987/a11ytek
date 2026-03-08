"use client";

import Link from "next/link";
import { Accessibility, Linkedin, Twitter, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/why-us", label: "Why Choose Us" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services", label: "Accessibility Audits" },
  { href: "/services", label: "WCAG Compliance" },
  { href: "/services", label: "Remediation Services" },
  { href: "/services", label: "Training & Workshops" },
  { href: "/services", label: "VPAT Documentation" },
];

const socialLinks = [
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com", label: "GitHub", icon: Github },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-foreground text-background py-12 sm:py-16"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold mb-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background rounded-sm"
              aria-label="A11yTek - Home"
            >
              <Accessibility className="h-7 w-7" aria-hidden="true" />
              <span>A11yTek</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Helping organizations create inclusive digital experiences that
              work for everyone. Expert accessibility consulting, auditing, and
              remediation services.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
                    aria-label={`Visit our ${social.label} page`}
                  >
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="font-semibold text-base mb-4">Quick Links</h2>
            <nav aria-label="Footer quick links">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background/70 text-sm hover:text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services links */}
          <div>
            <h2 className="font-semibold text-base mb-4">Services</h2>
            <nav aria-label="Footer services links">
              <ul className="space-y-2">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-background/70 text-sm hover:text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h2 className="font-semibold text-base mb-4">Contact Us</h2>
            <address className="not-italic space-y-2 text-sm text-background/70">
              <p>
                <a
                  href="mailto:a11ytek.accessibility@gmail.com"
                  className="hover:text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background rounded-sm"
                >
                  a11ytek.accessibility@gmail.com
                </a>
              </p>
              <p>
                Remote
                <br />
                Serving clients worldwide
              </p>
            </address>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Bottom footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>
            &copy; {currentYear} A11yTek. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background rounded-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/accessibility-statement"
              className="hover:text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background rounded-sm"
            >
              Accessibility Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
