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
  title: "Bryan Alexis Mejia Fonseca - Software Developer & Network Engineer",
  description: "Software Developer and CCNA-certified Network Engineer from Tegucigalpa, Honduras. Specializing in full-stack development, AWS cloud architecture, AI/Computer Vision, and scalable B2B platforms. 2024 UNITEC graduate with proven professional impact at Rita Group and Sumadi.",
  keywords: [
    "Software Developer",
    "Network Engineer",
    "Full Stack Developer",
    "CCNA",
    "AWS",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Django",
    "FastAPI",
    "Computer Vision",
    "AI",
    "Cloud Architecture",
    "Honduras",
    "Tegucigalpa",
    "UNITEC",
    "Rita Group",
    "B2B Marketplace",
    "Serverless",
    "PostgreSQL",
    "Firebase",
    "Remote Developer",
  ],
  authors: [{ name: "Bryan Alexis Mejia Fonseca" }],
  creator: "Bryan Alexis Mejia Fonseca",
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
  openGraph: {
    title: "Bryan Alexis Mejia Fonseca - Software Developer & Network Engineer",
    description: "Full-stack developer specializing in AWS cloud architecture, AI/Computer Vision, and scalable B2B platforms. CCNA-certified with 2+ years professional experience.",
    type: "website",
    locale: "en_US",
    url: "https://portfolio-bryan-mejia.vercel.app",
    siteName: "Bryan Mejia Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Alexis Mejia Fonseca - Software Developer",
    description: "Full-stack developer from Honduras specializing in AWS, React, Python, and AI technologies.",
    creator: "@alexismejiaf",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
