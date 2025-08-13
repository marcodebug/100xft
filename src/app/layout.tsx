import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import dynamic from "next/dynamic";
const AnalyticsClient = dynamic(() => import("@/components/ClientAnalytics"), { ssr: false, loading: () => null });
import "./globals.css";
import "../../styles/sections.css";
// LuxGradient removed - animations now built into NewHeroSection
import StructuredData from "@/components/StructuredData";
import ErrorBoundary from "@/components/ErrorBoundary";
import Loading from "@/components/Loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "100XFT – First Moroccan Prop Firm | US Clients Welcome",
  description: "Morocco's first prop trading firm. Elite challenges for traders worldwide including US clients. Up to 90% profit split, zero caps. Pre-register now.",
  metadataBase: new URL('https://100xft.com'),
  keywords: ["prop trading", "funded trading", "Morocco", "forex", "crypto", "futures", "trading challenge"],
  authors: [{ name: "100XFT Team" }],
  creator: "100XFT",
  publisher: "100XFT",
  icons: {
    icon: "/Untitled%20design.svg",
    apple: "/Untitled%20design.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://100xft.com',
    title: '100XFT – First Moroccan Prop Firm | US Clients Welcome',
     description: 'Morocco\'s first prop trading firm. Elite challenges for traders worldwide including US clients.',
    siteName: '100XFT',
    images: [
      {
        url: '/Untitled%20design.svg',
        width: 1200,
        height: 630,
        alt: '100XFT Logo'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '100XFT – First Moroccan Prop Firm | US Clients Welcome',
     description: 'Morocco\'s first prop trading firm. Elite challenges for traders worldwide including US clients.',
    creator: '@100XFT',
    images: ['/Untitled%20design.svg']
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <link rel="preload" as="image" href="/Untitled%20design.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </ErrorBoundary>
        <AnalyticsClient />
      </body>
    </html>
  );
}
