import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./convex-client-provider";
import { SITE_URL } from "@/lib/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Landscaping Services Bradenton FL | AYC Landscaping",
    template: "%s | AYC Landscaping",
  },
  description:
    "AYC Landscaping provides professional lawn care, landscape design, hardscaping, tree removal, and seasonal cleanup services in Bradenton, Sarasota, Palmetto, Ellenton, Venice, and Osprey, FL.",
  keywords: [
    "landscaping Bradenton FL",
    "lawn care Gulf Coast Florida",
    "landscape design Bradenton",
    "hardscaping Sarasota FL",
    "tree removal Bradenton Florida",
    "AYC Landscaping",
  ],
  openGraph: {
    title: "Landscaping Services Bradenton FL | AYC Landscaping",
    description:
      "Professional landscaping, lawn care, and hardscaping services serving Bradenton, Sarasota, Palmetto, Ellenton, Venice, and Osprey, FL.",
    type: "website",
    locale: "en_US",
    siteName: "AYC Landscaping",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "AYC Landscaping — Professional Landscaping Services in Bradenton, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping Services Bradenton FL | AYC Landscaping",
    description:
      "Professional landscaping, lawn care, and hardscaping services serving Bradenton, Sarasota, Palmetto, Ellenton, Venice, and Osprey, FL.",
    images: ["/images/hero.jpeg"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AYC Landscaping",
  description:
    "Professional landscaping, lawn care, landscape design, hardscaping, tree care, and seasonal cleanup services serving Bradenton and the Gulf Coast of Florida.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bradenton",
    addressRegion: "FL",
    addressCountry: "US",
  },
  telephone: "(941) 600-9879",
  areaServed: [
    "Bradenton, FL",
    "Ellenton, FL",
    "Palmetto, FL",
    "Sarasota, FL",
    "Venice, FL",
    "Osprey, FL",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${dmSerif.variable} font-sans antialiased`}
      >
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
