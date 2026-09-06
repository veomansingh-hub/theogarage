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
    default: "Theo Garage | Premium Independent Garage",
    template: "%s | Theo Garage",
  },
  description:
    "Servicing, diagnostics, MOT preparation and specialist repairs from a premium independent workshop. Straightforward advice, skilled technicians, careful workmanship.",
  keywords: [
    "independent garage",
    "car servicing",
    "MOT preparation",
    "diagnostics",
    "brake repair",
    "hybrid EV service",
    "premium garage",
    "Theo Garage",
  ],
  openGraph: {
    type: "website",
    siteName: "Theo Garage",
    title: "Theo Garage | Premium Independent Garage",
    description:
      "Servicing, diagnostics, MOT preparation and specialist repairs from a premium independent workshop.",
    url: SITE_URL,
    images: [
      {
        url: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Theo Garage — Premium Independent Workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theo Garage | Premium Independent Garage",
    description:
      "Servicing, diagnostics, MOT preparation and specialist repairs from a premium independent workshop.",
    images: [
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  robots: {
    index: false, // Demo site — keep out of search engines
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
