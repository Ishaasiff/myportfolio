import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { TagCursor } from "@/components/TagCursor";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Isha Asif | Software Engineering Student & Full Stack Developer",
    template: "%s | Isha Asif",
  },
  description:
    "Portfolio of Isha Asif — a passionate full stack developer and software engineering student building scalable web applications with modern front-end and back-end technologies.",
  keywords: [
    "Isha Asif",
    "Full Stack Developer",
    "Software Engineering Student",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Isha Asif" }],
  creator: "Isha Asif",
  openGraph: {
    type: "website",
    title: "Isha Asif | Software Engineering Student & Full Stack Developer",
    description:
      "Portfolio of Isha Asif — a passionate full stack developer and software engineering student building scalable web applications.",
    url: siteUrl,
    siteName: "Isha Asif",
    images: [{ url: "/avatar-new.png", width: 360, height: 360, alt: "Isha Asif" }],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <TagCursor />
        {children}
      </body>
    </html>
  );
}
