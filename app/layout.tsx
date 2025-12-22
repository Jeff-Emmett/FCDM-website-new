import type React from "react"
import type { Metadata } from "next"
import { Oswald, Permanent_Marker, Playfair_Display, Roboto } from "next/font/google"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-oswald",
  display: "swap",
})

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-permanent-marker",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair-display",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://fullcircledigitalmarketing.ca"),
  title: "Full Circle Digital Marketing",
  description: "We are a boutique digital marketing team committed to helping you succeed at what you do best.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⭕</text></svg>",
  },
  generator: "v0.dev",
  openGraph: {
    title: "Full Circle Digital Marketing",
    description:
      "We are a boutique digital marketing team committed to helping you succeed at what you do best.",
    url: "https://fullcircledigitalmarketing.ca",
    siteName: "Full Circle Digital Marketing",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Full Circle Digital Marketing",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Circle Digital Marketing",
    description:
      "We are a boutique digital marketing team committed to helping you succeed at what you do best.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts for faster rendering */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUtiZTaR.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for Google Fonts */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${roboto.variable} ${oswald.variable} ${permanentMarker.variable} ${playfairDisplay.variable}`}>
        {children}
      </body>
    </html>
  )
}
