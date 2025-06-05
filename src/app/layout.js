import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alver Manabat",
  description:
    "Frontend Developer Portfolio showcasing projects and skills.",
  keywords: [
    "Frontend Developer",
    "ReactJS",
    "Next.js",
    "Web Developer Portfolio",
    "Alver Manabat",
    "JavaScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Alver Manabat" }],
  creator: "Alver Manabat",
  icons: {
    icon: "/Logo-gradient.svg",
  },
  openGraph: {
    title: "Alver Manabat | Frontend Developer Portfolio",
    description:
      "A modern web portfolio built with Next.js showcasing projects and UI skills.",
    url: "https://alverarevalo.vercel.app",
    siteName: "Alver Manabat Portfolio",
    images: [
      {
        url: "/preview-image.png",
        width: 1200,
        height: 630,
        alt: "Alver Manabat Portfolio Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alver Manabat | Frontend Developer Portfolio",
    description:
      "Check out Alver Manabat's web developer portfolio built using Next.js.",
    images: ["/preview-image.png"],
    creator: "@alver_arevalo", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
