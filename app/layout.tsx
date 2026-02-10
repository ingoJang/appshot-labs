import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AppShot Labs | App Store Screenshot Design Studio',
    template: `${SITE_NAME} | %s`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  keywords: [
    'AppShot Labs',
    'appshotlabs',
    'App Store screenshots',
    'App Store screenshot design',
    'App Store design',
    'screenshot design studio',
    'mobile app marketing',
    'ASO design',
    'app store optimization',
    'Google Play screenshots',
    'app store visuals',
    'app store creative agency',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: `${SITE_NAME} - App Store Screenshot Design Studio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ingokr95',
    creator: '@ingokr95',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - App Store Screenshot Design Studio`,
      },
    ],
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
  verification: {
    // Add verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white">
        <StructuredData />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
