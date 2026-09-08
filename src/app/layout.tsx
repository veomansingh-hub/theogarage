import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://theo-garage.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hartwell Motorworks | Independent Automotive",
    template: "%s | Hartwell Motorworks",
  },
  description:
    "A contemporary independent automotive experience focused on servicing, diagnostics, maintenance and meticulous vehicle care.",
  keywords: [
    "Hartwell Motorworks",
    "independent automotive",
    "car servicing",
    "MOT preparation",
    "diagnostics",
    "brake repair",
    "hybrid EV service",
    "vehicle maintenance",
  ],
  openGraph: {
    type: "website",
    siteName: "Hartwell Motorworks",
    title: "Hartwell Motorworks | Independent Automotive",
    description:
      "A contemporary independent automotive experience focused on servicing, diagnostics, maintenance and meticulous vehicle care.",
    url: SITE_URL,
    images: [
      {
        url: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Hartwell Motorworks — Independent Automotive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hartwell Motorworks | Independent Automotive",
    description:
      "A contemporary independent automotive experience focused on servicing, diagnostics, maintenance and meticulous vehicle care.",
    images: [
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
