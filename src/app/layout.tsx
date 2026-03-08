import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A11yTek | Digital Accessibility for Everyone",
  description: "Expert accessibility consulting, auditing, and remediation services. We help organizations create inclusive digital experiences that work for everyone. WCAG compliance, accessibility audits, and training.",
  keywords: ["accessibility", "WCAG", "digital accessibility", "a11y", "accessibility audit", "accessibility consulting", "inclusive design", "screen reader", "assistive technology", "VPAT", "ADA compliance"],
  authors: [{ name: "A11yTek Team" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "A11yTek | Digital Accessibility for Everyone",
    description: "Expert accessibility consulting, auditing, and remediation services to ensure your digital products are inclusive and compliant.",
    url: "https://a11ytek.com",
    siteName: "A11yTek",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 1024,
        height: 1024,
        alt: "A11yTek - Digital Accessibility for Everyone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A11yTek | Digital Accessibility for Everyone",
    description: "Expert accessibility consulting, auditing, and remediation services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
