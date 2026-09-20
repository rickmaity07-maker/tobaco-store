import type { Metadata } from "next"
import { Geist, Chakra_Petch } from "next/font/google"
import "./globals.css"
import { SITE_URL, business } from "@/lib/site"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const chakraPetch = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.name} — Spirits, Tobacco, Vape & Everyday Goods`,
    template: `%s — ${business.name}`,
  },
  description: business.description,
  openGraph: {
    title: `${business.name} — Spirits, Tobacco, Vape & Everyday Goods`,
    description: business.description,
    url: SITE_URL,
    siteName: business.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — Spirits, Tobacco, Vape & Everyday Goods`,
    description: business.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ConvenienceStore",
  name: business.name,
  description: business.description,
  telephone: business.telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.streetAddress,
    addressLocality: business.addressLocality,
    addressRegion: business.addressRegion,
    postalCode: business.postalCode,
    addressCountry: "US",
  },
  openingHoursSpecification: business.openingHours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  url: SITE_URL,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${chakraPetch.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
