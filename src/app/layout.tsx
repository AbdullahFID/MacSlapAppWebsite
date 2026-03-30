import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MacSlapApp — Slap Your MacBook and It Screams Back",
  description:
    "Free, open-source app that makes your MacBook scream when you slap it. 5-algorithm seismology-grade impact detection, screen shake, brightness flash, haptic feedback, 7 voice packs. Built with Swift, IOKit, and private macOS APIs. Works on all Apple Silicon MacBooks.",
  keywords: [
    "MacBook slap app",
    "SlapMac alternative",
    "MacBook screams",
    "MacBook accelerometer app",
    "macOS fun app",
    "MacBook impact detection",
    "Apple Silicon accelerometer",
    "MacBook haptic feedback",
    "screen shake macOS",
    "MacBook prank app",
    "slap your laptop",
    "MacBook sound effects",
    "free SlapMac",
    "open source macOS app",
    "IOKit HID accelerometer",
    "MacBook motion sensor",
    "M1 M2 M3 M4 M5 MacBook app",
  ],
  authors: [{ name: "AbdullahFID" }],
  creator: "AbdullahFID",
  openGraph: {
    title: "MacSlapApp — Slap Your MacBook and It Screams Back",
    description:
      "Free, open-source SlapMac alternative with screen shake, brightness flash, haptic feedback, and 5-algorithm impact detection. Works on all Apple Silicon MacBooks.",
    url: "https://macslap.app",
    siteName: "MacSlapApp",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MacSlapApp — Slap Your MacBook and It Screams Back",
    description:
      "Free, open-source SlapMac alternative. 5-algorithm impact detection, screen shake, haptic feedback, 7 voice packs.",
  },
  metadataBase: new URL("https://macslap.app"),
  alternates: {
    canonical: "https://macslap.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://macslap.app" />
        <meta name="theme-color" content="#050505" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "MacSlapApp",
              operatingSystem: "macOS",
              applicationCategory: "EntertainmentApplication",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              description:
                "Slap your MacBook and it screams back. Open-source SlapMac alternative with screen shake, brightness flash, haptic feedback, and seismology-grade impact detection.",
              url: "https://macslap.app",
              downloadUrl:
                "https://github.com/AbdullahFID/MacSlapApp",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-[#f0f0f0]">
        {children}
      </body>
    </html>
  );
}
