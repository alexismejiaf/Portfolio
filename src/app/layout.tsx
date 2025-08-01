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
  title: "Bryan Alexis Mejia Fonseca - Software Developer",
  description: "Software Developer and Network Engineer from Honduras specializing in web applications, cloud solutions, and AI technologies. Experienced with Python, JavaScript, React, AWS, and more.",
  keywords: ["Software Developer", "Network Engineer", "Python", "JavaScript", "React", "AWS", "Honduras", "Full Stack Developer"],
  authors: [{ name: "Bryan Alexis Mejia Fonseca" }],
  creator: "Bryan Alexis Mejia Fonseca",
  openGraph: {
    title: "Bryan Alexis Mejia Fonseca - Software Developer",
    description: "Software Developer and Network Engineer from Honduras specializing in web applications, cloud solutions, and AI technologies.",
    type: "website",
    locale: "en_US",
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
