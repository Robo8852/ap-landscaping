import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import "./globals.css";

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
  title: {
    default: "Landscaping Services Bradenton FL | ACP Landscaping",
    template: "%s | ACP Landscaping",
  },
  description:
    "ACP Landscaping provides professional lawn care, landscape design, hardscaping, tree removal, and seasonal cleanup services in Bradenton, Sarasota, Palmetto, Ellenton, Venice, and Osprey, FL.",
  keywords: [
    "landscaping Bradenton FL",
    "lawn care Gulf Coast Florida",
    "landscape design Bradenton",
    "hardscaping Sarasota FL",
    "tree removal Bradenton Florida",
    "ACP Landscaping",
  ],
  openGraph: {
    title: "Landscaping Services Bradenton FL | ACP Landscaping",
    description:
      "Professional landscaping, lawn care, and hardscaping services serving Bradenton, Sarasota, Palmetto, Ellenton, Venice, and Osprey, FL.",
    type: "website",
    locale: "en_US",
    siteName: "ACP Landscaping",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "ACP Landscaping",
  description:
    "Professional landscaping, lawn care, landscape design, hardscaping, tree care, and seasonal cleanup services serving Bradenton and the Gulf Coast of Florida.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bradenton",
    addressRegion: "FL",
    addressCountry: "US",
  },
  telephone: "(555) 123-4567",
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
        {children}
      </body>
    </html>
  );
}
