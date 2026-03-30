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
    "SlapMac free",
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
    "MacBook slap detection",
    "macOS accelerometer",
    "MacBook funny app",
    "laptop slap sound",
    "MacSlap",
    "mac slap app",
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
  other: {
    "format-detection": "telephone=no",
  },
};

// Structured data: SoftwareApplication + FAQPage
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MacSlapApp",
    alternateName: "MacSlap",
    operatingSystem: "macOS 14.6+",
    applicationCategory: "EntertainmentApplication",
    applicationSubCategory: "Utilities",
    isAccessibleForFree: true,
    license: "https://opensource.org/licenses/MIT",
    softwareVersion: "1.0.0",
    datePublished: "2026-03-30",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    description:
      "Slap your MacBook and it screams back. Open-source SlapMac alternative with screen shake, brightness flash, haptic feedback, and seismology-grade impact detection. 7 voice packs, 130+ sound effects.",
    url: "https://macslap.app",
    downloadUrl: "https://github.com/AbdullahFID/MacSlapApp/releases",
    codeRepository: "https://github.com/AbdullahFID/MacSlapApp",
    programmingLanguage: "Swift",
    author: {
      "@type": "Person",
      name: "AbdullahFID",
      url: "https://github.com/AbdullahFID",
    },
    featureList:
      "5-algorithm slap detection, 7 voice packs, screen shake, brightness flash, haptic feedback, USB moaner, dynamic volume, escalation tracking, launch at login, per-effect intensity sliders",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Will MacSlapApp damage my MacBook?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Your MacBook's accelerometer is designed to detect drops and impacts. MacSlapApp only reads data from it — it doesn't modify any hardware. Slap responsibly though.",
        },
      },
      {
        "@type": "Question",
        name: "Does MacSlapApp work on iMac, Mac Mini, or Mac Pro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Only MacBooks have built-in accelerometers (BMI286 IMU). Desktop Macs don't have this sensor.",
        },
      },
      {
        "@type": "Question",
        name: "Does MacSlapApp work on Intel MacBooks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. It requires Apple Silicon (M1 or later). The AppleSPUHIDDevice sensor driver is Apple Silicon only.",
        },
      },
      {
        "@type": "Question",
        name: "Is MacSlapApp free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, completely free and open source under the MIT license. No trial limits, no license keys, no DRM. Free forever.",
        },
      },
      {
        "@type": "Question",
        name: "How does MacSlapApp detect slaps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It uses five concurrent signal processing algorithms (STA/LTA at 3 timescales, CUSUM, Kurtosis, and Peak/MAD) that vote on whether an impact occurred. These are the same algorithms used in earthquake detection. The MacBook's built-in Bosch BMI286 accelerometer samples at 1kHz.",
        },
      },
      {
        "@type": "Question",
        name: "Does MacSlapApp use private macOS APIs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — DisplayServices for hardware brightness control and CGS for screen capture/shake. These work without disabling SIP and are standard for non-App Store macOS apps.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MacSlapApp",
    url: "https://macslap.app",
  },
];

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
        <meta name="theme-color" content="#050505" />
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-[#f0f0f0]">
        {children}
      </body>
    </html>
  );
}
