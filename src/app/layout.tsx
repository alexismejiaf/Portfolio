import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { noFlashScript } from "@/lib/theme";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-alexis-mejia.vercel.app"),
  title: "Bryan Alexis Mejía Fonseca — Software Developer",
  description:
    "Software developer with 2+ years building serverless cloud systems, full-stack web apps, and automation pipelines. AWS, FastAPI, Python, C#/.NET, Playwright. CCNA certified.",
  keywords: [
    "Software Developer", "Full Stack Developer", "Automation Engineer",
    "AWS", "Serverless", "Python", "C#", ".NET", "Playwright", "FastAPI",
    "React", "Next.js", "Computer Vision", "CCNA", "Honduras", "Remote Developer",
  ],
  authors: [{ name: "Bryan Alexis Mejía Fonseca" }],
  creator: "Bryan Alexis Mejía Fonseca",
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
    title: "Bryan Alexis Mejía Fonseca — Software Developer",
    description:
      "Serverless cloud, full-stack web, and automation pipelines. 2+ years professional experience.",
    type: "website",
    locale: "en_US",
    url: "https://portfolio-alexis-mejia.vercel.app",
    siteName: "Bryan Mejía — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Alexis Mejía Fonseca — Software Developer",
    description: "Serverless cloud, full-stack, and automation. AWS, C#/.NET, Python, Playwright.",
    creator: "@alexismejiaf",
  },
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bryan Alexis Mejía Fonseca",
              jobTitle: "Software Developer",
              url: "https://portfolio-alexis-mejia.vercel.app",
              email: "bryamejia@gmail.com",
              address: { "@type": "PostalAddress", addressLocality: "Tegucigalpa", addressCountry: "HN" },
              sameAs: ["https://github.com/alexismejiaf", "https://linkedin.com/in/alexismejiaf"],
            }),
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
